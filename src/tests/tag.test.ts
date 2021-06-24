import server from "app";
import supertest from "supertest";
import { createConnection, getConnection } from 'typeorm';

import { TagRepository } from "repositories/TagRepository";
import { getCustomRepository } from "typeorm";

jest.useFakeTimers();

const mockTag = {
    name: "Test Unit"
}

const request = supertest(server);

describe("Tags", () => {

    beforeAll(async () => {
        await createConnection()
    })

    it("Should be create a tag", async () => {
        const response = await request.post("/tags").send(mockTag);

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe(mockTag.name);
    });

    it("Should be error to exists tag", async () => {
        const response = await request.post("/tags").send(mockTag);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Tag already exists')
    });

    it("Should be error to name undefined", async () => {
        const response = await request.post("/tags").send({ name: undefined });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Incorrect name')
    });

    afterAll(async () => {
        const tagRepository = getCustomRepository(TagRepository);
        await tagRepository.delete({ name: mockTag.name });
        await getConnection().close();
    })
});

