import { ApolloServer } from "apollo-server";
import schema from "./api/schema/schema";

const server = new ApolloServer({ schema });

server.listen().then(
  ({ url }) => console.log(`Open Leaderboard Backend started: ${url}`)
);
