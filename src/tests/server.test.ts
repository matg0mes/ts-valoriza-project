import server from "server";
import supertest from "supertest";

jest.useFakeTimers();

describe("Server - Configurations", () => {

    it("Should give 404 for paths that don't exist", async () => {
        await supertest(server).get("/fakeEndpoint")
            .expect(404)
            .then((response) => {
                expect(response.body.message).toBe('RESOURCE_NOT_FOUND');
            });
    });

});

