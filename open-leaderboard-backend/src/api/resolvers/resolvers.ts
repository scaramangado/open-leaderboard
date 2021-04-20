import { IResolvers } from "graphql-tools";
import GameResolver from "./game-resolver";

const gameResolver = new GameResolver();

const resolvers: IResolvers[] = [
  {
    Query: {
      games: () => gameResolver.games(),
      game: (_parent, args, _context, _info) => gameResolver.game(args),
    },
  },
];

export default resolvers;
