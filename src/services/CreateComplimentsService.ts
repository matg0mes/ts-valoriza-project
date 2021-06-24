import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "repositories/ComplimentsRepository"

import { UserRepository } from "repositories/UserRepository";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

class CreateComplimentsService {

    async execute({ user_receiver, user_sender, tag_id, message }: IComplimentRequest) {
        const usersRepository = getCustomRepository(UserRepository);
        const complimentsRepository = getCustomRepository(ComplimentsRepository);

        if (user_receiver === user_sender) {
            throw new Error("Incorrect user receiver");
        }

        const userReceiverExist = await usersRepository.findOne(user_receiver);

        if (!userReceiverExist) {
            throw new Error("User receiver does not exists!");
        }

        const compliment = complimentsRepository.create({
            message,
            user_receiver,
            user_sender,
            tag_id,
        })

        await complimentsRepository.save(compliment);

        return compliment;
    }

}

export { CreateComplimentsService }