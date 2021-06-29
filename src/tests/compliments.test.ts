import server from "app";
import supertest from "supertest";
import { createConnection, getConnection, Repository } from 'typeorm';

import { getCustomRepository } from "typeorm";

import { TagRepository } from "repositories/TagRepository";
import { UserRepository } from "repositories/UserRepository";
import { ComplimentsRepository } from "repositories/ComplimentsRepository";

jest.useFakeTimers();

let mockUserSender = {
    id: undefined,
    name: "matheus gomes2",
    email: "test2@test.com",
    admin: true,
    password: "12345631"
}

let mockUserReceiver = {
    id: undefined,
    name: "matheus gomes3",
    email: "test3@test.com",
    admin: true,
    password: "12345631"
}

let mockTag = {
    id: undefined,
    name: "Test Unit In Compliments",
}

const request = supertest(server);

let tagRepository: TagRepository;
let userRepository: UserRepository;
let complimentsRepository: ComplimentsRepository;

describe("Compliments", () => {

    beforeAll(async () => {
        await createConnection();

        tagRepository = getCustomRepository(TagRepository);
        userRepository = getCustomRepository(UserRepository);
        complimentsRepository = getCustomRepository(ComplimentsRepository);

        mockTag = tagRepository.create(mockTag);
        mockUserSender = userRepository.create(mockUserSender);
        mockUserReceiver = userRepository.create(mockUserReceiver);

        await tagRepository.save(mockTag);
        await userRepository.save(mockUserSender);
        await userRepository.save(mockUserReceiver);
    })

    it("Should be create a compliments", async () => {
        const response = await request.post("/compliments").send({
            tag_id: mockTag.id,
            user_receiver: mockUserReceiver.id,
            user_sender: mockUserSender.id,
            message: "Teste teste"
        });

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("Teste teste");
    });

    afterAll(async () => {
        await tagRepository.delete({ name: mockTag.id });
        await userRepository.delete({ name: mockUserSender.id });
        await userRepository.delete({ name: mockUserReceiver.id });
        await complimentsRepository.delete({ message: "Teste teste" });

        await getConnection().close();
    })
});

