import { User } from "entities/User"
import { Repository, EntityRepository } from "typeorm"

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories }