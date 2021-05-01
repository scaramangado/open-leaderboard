import leaderboardRepository, { LeaderboardRepository } from "../../data/leaderboards/leaderboard-repository";

export default class LeaderboardResolver {

  #repository: LeaderboardRepository;

  constructor(repository: LeaderboardRepository = leaderboardRepository) {
    this.#repository = repository;
  }

  leaderboards(args: any): any[] {

    const slug = args.gameSlug;
    const leaderboards = this.#repository.findLeaderboardsByGameSlug(slug);

    return leaderboards;
  };

  categories(args: any): any[] {

    const slug = args.gameSlug;
    const categories = this.#repository.findCategoriesByGameSlug(slug);
    const gqlCats: any[] = [];

    categories.forEach(c => {
      const gql: any = {
        ...c,
        submissions: c.submissions.map(s => {
          return {
            id: s.id,
            time: s.time,
            category: c,
          };
        })
      };

      gqlCats.push(gql);
    });

    return gqlCats;
  };
}
