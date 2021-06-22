import server from "@app/server";

import supertest from "supertest";

describe("Server - Configurations", () => {

    it("Should give 404 for paths that don't exist", async () => {
        await supertest(server).get("/fakeEndpoint")
            .expect(404)
            .then((response) => {
                console.log(response.body)
                expect(response.body.message).toBe('RESOURCE_NOT_FOUND');
            });
    });

});

