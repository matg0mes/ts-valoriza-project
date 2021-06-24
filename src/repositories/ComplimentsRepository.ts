import { Compliments } from "entities/Compliments"
import { Repository, EntityRepository } from "typeorm"

@EntityRepository(Compliments)
class ComplimentsRepository extends Repository<Compliments> {}

export { ComplimentsRepository }