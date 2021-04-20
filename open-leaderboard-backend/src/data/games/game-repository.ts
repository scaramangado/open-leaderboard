import Game from "../../api/model/game";

export interface GameRepository {
  findAllGames: () => Game[];
  findGameBySlug: (slug: string) => Game | undefined;
}

// TODO Replace by database connection
const mockGames = [
  {
    slug: "oot",
    name: "Ocarina of Time",
    releaseDate: new Date(1998, 11, 21),
  },
  {
    slug: "sm64",
    name: "Super Mario 64",
    releaseDate: new Date(1996, 6, 23)
  }
]

const gameRepository: GameRepository = {

  findAllGames: () => {
    return mockGames;
  },

  findGameBySlug: (slug: string) =>
    mockGames.find(g => g.slug === slug),
};

export default gameRepository;
