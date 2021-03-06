import { Post } from '../entities/Post';
import { MyContext } from 'src/types';
import {Resolver,
        Query, 
        Arg, 
        Ctx, 
        Int, 
        Mutation} from 'type-graphql';

@Resolver()
export class PostResolver {
    @Query(() => String)
    hello_mtfk() { 
        return "Hello motherfucker"
    }
    @Query(() => [Post])
    posts( @Ctx() {em}: MyContext ): Promise<Post[]>{
            return em.find(Post, {});
        }

    @Query(() => Post, {nullable : true})

    post_by_id( 
        @Arg('id', () => Int) id: number,
        @Ctx() {em}: MyContext ): Promise<Post | null>{
            return em.findOne(Post, {id});
        }

    @Mutation(() => Post)
    async createPost(
        @Arg("title") title: string,
        @Ctx() { em }: MyContext
    ) : Promise <Post> {
        const post = em.create(Post, { title });
        await em.persistAndFlush(post);
        return post;
    }

    @Mutation(() => Post, {nullable: true})
    async updatePost(
        @Arg("id") id:number,
        @Arg("title", () => String, {nullable: true}) title: string,
        @Ctx() {em}: MyContext
    ): Promise<Post> {
        const post = await em.findOne(Post, { id });
        if (!post) {
            return null;
        }
        if (typeof title !== 'undefined') {
            post.title = title;
            await em.persistAndFlush(post);
        }
        return post;
    }

    @Mutation(() => Boolean)
    async deleletPost(
        @Arg("id") id: number,
        @Ctx() { em }: MyContext,

    ): Promise<boolean> {
        await em.nativeDelete(Post, {id});
        return true;
    }

}