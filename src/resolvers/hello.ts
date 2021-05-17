import {Resolver, Query} from 'type-graphql';

@Resolver()
export class HelloResolver {
    //Query return type
    @Query(() => String) 
    hello() {
        return "hello dogs"
    }

}