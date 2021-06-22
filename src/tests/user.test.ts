import server from "app";
import supertest from "supertest";
import { createConnection, getConnection } from 'typeorm';

import { UsersRepositories } from "repositories/UserRepository";
import { getCustomRepository } from "typeorm";

jest.useFakeTimers();

const mockUser = {
    name: "matheus gomes",
    email: "test@test.com",
    admin: true
}

const request = supertest(server);

describe("Users", () => {

    beforeAll(async () => {
        await createConnection()
    })

    it("Should be create a user", async () => {
        const response = await request.post("/users").send(mockUser);

        expect(response.statusCode).toBe(201);
        expect(response.body.email).toBe(mockUser.email);
    });

    it("Should be error to exists user", async () => {
        const response = await request.post("/users").send(mockUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('User already exists')
    });

    it("Should be error to email undefined", async () => {
        const response = await request.post("/users").send({...mockUser, email: undefined});

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Email incorrect')
    });

    afterAll(async () => {
        const UserRepository = getCustomRepository(UsersRepositories);
        await UserRepository.delete({ email: mockUser.email });
        await getConnection().close();
    })
});

