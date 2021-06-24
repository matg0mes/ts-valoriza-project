import { User } from "entities/User"
import { Repository, EntityRepository } from "typeorm"

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository }