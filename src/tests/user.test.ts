import server from "app";
import supertest from "supertest";
import { createConnection, getConnection } from 'typeorm';

import { UserRepository } from "repositories/UserRepository";
import { getCustomRepository } from "typeorm";

jest.useFakeTimers();

const mockUser = {
    name: "matheus gomes",
    email: "test@test.com",
    admin: true,
    password: "12345631"
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

    it("Should be authenticate a user", async () => {
        const response = await request.post("/users/session").send({
            email: mockUser.email,
            password: mockUser.password,
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.token).not.toBe(undefined);
    });

    it("Should be error to exists user", async () => {
        const response = await request.post("/users").send(mockUser);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('User already exists')
    });

    it("Should be error to email undefined", async () => {
        const response = await request.post("/users").send({ ...mockUser, email: undefined });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Email incorrect')
    });

    it("Should be error to email/password is invalid", async () => {
        const response = await request.post("/users/session").send({
            email: mockUser.email,
            password: "PasswordInvalid",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Email/Password incorrect')
    });

    afterAll(async () => {
        const userRepository = getCustomRepository(UserRepository);
        await userRepository.delete({ email: mockUser.email });
        await getConnection().close();
    })
});

