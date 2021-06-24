import { Request, Response } from "express";
import { CreateComplimentsService } from "services/CreateComplimentsService";

class CreateComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_receiver, user_sender, tag_id, message } = request.body;

        const createComplimentsService = new CreateComplimentsService;
        const compliments = await createComplimentsService.execute({
            user_receiver,
            user_sender,
            tag_id,
            message
        });

        return response.status(201).json(compliments);
    }
}

export { CreateComplimentsController };