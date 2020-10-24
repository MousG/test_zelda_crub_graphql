import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import rootSchema from './schemas/schema.graphql'
import { characterResolver} from './resolvers/character'
import { gameResolver} from './resolvers/game'
import { developerResolver } from './resolvers/developer'

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs:[
        rootSchema
    ],
    resolvers: [
        characterResolver,
        gameResolver,
        developerResolver
    ]
})
