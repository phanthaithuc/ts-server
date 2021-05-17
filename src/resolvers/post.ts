import { Post } from 'src/entities/Post';
import {Resolver, Query, Ctx, Arg, Int} from 'type-graphql';
import { MyContext } from "../types";

@Resolver()
export class PostResolver {

    @Query(() => [Post])
    posts( @Ctx() {em}: MyContext ): Promise<Post[]>{
            return em.find(Post, {});
        }

    @Query(() => Post, {nullable : true})

    post( 
        @Arg('id', () => Int) id: number,
        @Ctx() {em}: MyContext ): Promise<Post | null>{
            return em.findOne(Post, {id});
        }
}

// @Resolver()
// export class PostResolver {
//     //Query return type
//     @Query(() => String) 
//     Hi_mtf() {
//         return "hello mtf"
//     }

// }

// @Resolver 
// export class PostResolver{

//     // @Query(() => [Post])
//     // posts(@Ctx() { em }: MyContext) : Promise<Post[]> {
//     //     return em.find(Post, {});
//     // }


// @Query(() => Post, { nullable: true })
// post(
//     @Arg("id", () => Int) id: number,
//     @Ctx() {em} : MyContext 
// ): Promise<Post | null> {
//     return em.findOne(Post, { id });
// }

// }