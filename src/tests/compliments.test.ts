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

let mockCompliments = {
    tag_id: undefined,
    user_receiver: undefined,
    user_sender: undefined,
    message: undefined
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
        mockCompliments = complimentsRepository.create({
            tag_id: "820f5a7a-6ede-4efb-a4cd-bcd69b5651b9",
            user_receiver: mockUserReceiver.id,
            user_sender: mockUserSender.id,
            message: "Teste teste"
        })

        await tagRepository.save(mockTag);
        await userRepository.save(mockUserSender);
        await userRepository.save(mockUserReceiver);
        await complimentsRepository.save(mockCompliments)
    })

    it("Should be create a compliments", async () => {
        const response = await request.post("/compliments").send(mockCompliments);

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe(mockCompliments.message);
    });

    afterAll(async () => {
        await complimentsRepository.delete({ message: "Teste teste" });
        await tagRepository.delete({ id: mockTag.id });
        await userRepository.delete({ id: mockUserSender.id });
        await userRepository.delete({ id: mockUserReceiver.id });

        await getConnection().close();
    })
});

