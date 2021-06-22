import app from "app";
import supertest from "supertest";

const request = supertest(app)

describe("Server", () => {

    it("Should give 404 for paths that don't exist", async () => {
        const response = await request.get("/fakeEndpoint")

        expect(response.status).toBe(404)
        expect(response.body.message).toBe('RESOURCE_NOT_FOUND')
    });

});

