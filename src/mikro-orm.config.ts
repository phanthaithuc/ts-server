import { MikroORM } from "@mikro-orm/core";
import {Post} from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";

export default {

    migrations: {
        path: path.join(__dirname,"./migrations"),
        patter: /^[/w-] + \d+\.[tj]s$/,
    },
    entities:[Post],
    dbName: "tutorial",
    user: "root",
    password: "13060491t",
    type : "mysql",
    debug: !__prod__,

    } as Parameters<typeof MikroORM.init>[0];