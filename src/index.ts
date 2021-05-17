import "reflect-metadata"
import { MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express from "express";
import { Post } from "./entities/Post";
import {ApolloServer} from 'apollo-server-express';
import {buildSchema} from 'type-graphql'
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async() => { 
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    // const post = orm.em.create(Post, {title: "My second post"});
    // await orm.em.persistAndFlush(post);

    // await orm.em.nativeInsert(Post, {title: "My second post"});

    // const posts = await orm.em.find(Post, {});   
    // console.log(posts);

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false,

        }),
        context: () => ({ em: orm.em}),

    });

    apolloServer.applyMiddleware({app});
    app.listen(6969, () => {
        console.log("Server start on localhost: 6969");
    })
   

}


main().catch((err) => {
    console.error(err);

})