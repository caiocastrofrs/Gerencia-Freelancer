import { schema } from './schema/schema.ts'
import { createYoga } from 'graphql-yoga'
import Koa from 'koa'

const PORT = 4000
const app = new Koa()

const yoga = createYoga<Koa.ParameterizedContext>({ schema })

// Bind GraphQL Yoga to `/graphql` endpoint
app.use(async ctx => {
  // Second parameter adds Koa's context into GraphQL Context
  // If you use any body parsing middleware in your application,
  // Make sure it is `ctx.request` and not `ctx.req`
  const response = await yoga.handleNodeRequestAndResponse(ctx.request, ctx.res, ctx)

  // Set status code
  ctx.status = response.status

  // Set headers
  response.headers.forEach((value, key) => {
    ctx.append(key, value)
  })

  // Converts ReadableStream to a NodeJS Stream
  ctx.body = response.body
})


app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/${yoga.graphqlEndpoint}`)
})
