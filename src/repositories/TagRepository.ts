import { Tag } from "entities/Tag"
import { Repository, EntityRepository } from "typeorm"

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {}

export { TagRepository }