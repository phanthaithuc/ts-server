import { MikroORM } from "@mikro-orm/core";
import {Post} from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";

console.log('dirname: ', __dirname);
export default {

    migrations: {
        path: path.join(__dirname,"./migrations"),
        patter: /^[/w-] + \d+\.[tj]s$/,
    },
    entities: [Post],
    username: 'thuc',
    dbName: 'myportfolio-dev',
    type : 'postgresql',
    debug: !__prod__,

    } as Parameters<typeof MikroORM.init>[0];