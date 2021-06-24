import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { User } from "./User";

@Entity()
export class Compliments {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_sender" })
    userSender: User;

    @Column()
    user_receiver: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_receiver" })
    userReceiver: User;

    @Column()
    tag_id: string;

    @ManyToOne(() => Tag)
    @JoinColumn({ name: "tag_id" })
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}
