import server from "../server";

import supertest from "supertest";

describe("Server - Configurations", () => {

    it("Should give 404 for paths that don't exist", async () => {
        await supertest(server).get("/fakeEndpoint")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe('RESOURCE_NOT_FOUND');
            });
    });

    it("Should have message Hello world in andpoint post", async () => {
        await supertest(server).post("/tutorial/hello")
            .expect(200)
            .then((response) => {
                expect(response.body.message).toBe('Hello World!');
            });
    });

    it("Should have message Hello world in andpoint get", async () => {
        await supertest(server).get("/tutorial/hello")
            .expect(200)
            .then((response) => {
                expect(response.body.message).toBe('Hello World!');
            });
    });


});

