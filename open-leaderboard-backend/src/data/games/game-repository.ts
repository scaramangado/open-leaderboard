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
    releaseDate: new Date(Date.UTC(1998, 11, 21)),
    mainBoardId: "oot_main",
  },
  {
    slug: "sm64",
    name: "Super Mario 64",
    releaseDate: new Date(Date.UTC(1996, 6, 23)),
    mainBoardId: "sm64_main",
  }
];

const gameRepository: GameRepository = {

  findAllGames: () => {
    return mockGames;
  },

  findGameBySlug: (slug: string) =>
    mockGames.find(g => g.slug === slug),
};

export default gameRepository;
