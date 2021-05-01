import { IResolvers } from "graphql-tools";
import GameResolver from "./game-resolver";
import LeaderboardResolver from "./leaderboard-resovler";

const gameResolver = new GameResolver();
const leaderboardResolver = new LeaderboardResolver();

const resolvers: IResolvers[] = [
  {
    Query: {
      games: () => gameResolver.games(),
      game: (_parent, args, _context, _info) => gameResolver.game(args),
      leaderboards: (_parent, args, _context, _info) => leaderboardResolver.leaderboards(args),
      categories: (_parent, args, _context, _info) => leaderboardResolver.categories(args),
    },
  },
];

export default resolvers;
