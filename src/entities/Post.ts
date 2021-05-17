import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post{
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({type: "date"})
    createAt = new Date();

    @Field(() => String)
    @Property ({type: "date", onUpdate :() => new Date()})
    updateAT = new Date();

    @Field(() => String)
    @Property ({type: "text"})
    title!: string;

}