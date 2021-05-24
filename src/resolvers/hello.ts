
import { Post } from 'src/entities/Post';
import { MyContext } from 'src/types';
import {Resolver, Query, Ctx, Arg} from 'type-graphql';

@Resolver()
export class HelloResolver {
    //Query return type
    @Query(() => String) 
    hello() {
        return "hello dogs"
    }

    // @Query(() => [Post])
    // posts( @Ctx() {em}: MyContext ): Promise<Post[]>{
    //         return em.find(Post, {});
    //     }

    // @Query(() => Post, {nullable : true})

    // post( 
    //     @Arg('id', () => Int) id: number,
    //     @Ctx() {em}: MyContext ): Promise<Post | null>{
    //         return em.findOne(Post, {id});
    //     }

    @Query(() => [Post], {nullable: true})
    post ( 
        @Arg('id', () => Int) id: number
        @Ctx() {em}: MyContext) : Promise<[Post] | null > {

        return em.findOne(Post, {id});

    }

}