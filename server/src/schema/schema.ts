import { createSchema } from 'graphql-yoga'
import type { ParameterizedContext } from 'koa'

export const schema = createSchema<ParameterizedContext>({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String
    }
    type Subscription {
      countdown(from: Int!): Int!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  },
})
