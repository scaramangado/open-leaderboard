import Category from "../../api/model/category";
import Leaderboard from "../../api/model/leaderboard";
import gameRepository from "../games/game-repository";


export interface LeaderboardRepository {
  findLeaderboardsByGameSlug: (gameSlug: string) => Leaderboard[],
  findCategoriesByGameSlug: (gameSlug: string) => Category[],
}

const mockOotBoards: Leaderboard[] = [
  {
    id: "oot_main",
    name: "Ocarina of Time",
    game: gameRepository.findGameBySlug("oot")!,
    parent: undefined,
    subBoards: ["100", "oot_ext"],
    categories: ["any"],
    displayAsCategory: false,
  },
  {
    id: "100",
    name: "100%",
    game: gameRepository.findGameBySlug("oot")!,
    parent: "oot_main",
    subBoards: [],
    categories: ["100srm", "100nsrm"],
    displayAsCategory: true,
  },
  {
    id: "oot_ext",
    name: "Extensions Categories",
    game: gameRepository.findGameBySlug("oot")!,
    parent: "oot_main",
    subBoards: ["cd"],
    categories: ["37"],
    displayAsCategory: false,
  },
  {
    id: "cd",
    name: "Child Dungeons",
    game: gameRepository.findGameBySlug("oot")!,
    parent: "oot_ext",
    subBoards: [],
    categories: ["cdn", "cdg"],
    displayAsCategory: false,
  }
];

const mockOotCategories: Category[] = [
  {
    id: "any",
    name: "Any%",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "oot_main"),
    submissions: [
      {
        id: "a",
        category: "any",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "b",
        category: "any",
        time: "PT0H20M12S",
      },
    ],
  },
  {
    id: "100srm",
    name: "SRM",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "100"),
    submissions: [
      {
        id: "c",
        category: "100srm",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "d",
        category: "100srm",
        time: "PT0H20M12S",
      },
    ],
  },
  {
    id: "100nsrm",
    name: "No SRM",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "100"),
    submissions: [
      {
        id: "e",
        category: "100nsrm",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "f",
        category: "100nsrm",
        time: "PT0H20M12S",
      },
    ],
  },
  {
    id: "37",
    name: "37 Water Temple Keys",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "oot_ext"),
    submissions: [
      {
        id: "g",
        category: "37",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "h",
        category: "37",
        time: "PT0H20M12S",
      },
    ],
  },
  {
    id: "cdn",
    name: "No SRM",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "cd"),
    submissions: [
      {
        id: "i",
        category: "cdn",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "j",
        category: "cdn",
        time: "PT0H20M12S",
      },
    ],
  },
  {
    id: "cdg",
    name: "Glitchless",
    game: gameRepository.findGameBySlug("oot")!,
    leaderboard: <Leaderboard>mockOotBoards.find(b => b.id === "cd"),
    submissions: [
      {
        id: "k",
        category: "cdg",
        time: "P0DT0H18M10.042S",
      },
      {
        id: "l",
        category: "cdg",
        time: "PT0H20M12S",
      },
    ],
  },
];

const leaderboardRepository: LeaderboardRepository = {

  findLeaderboardsByGameSlug: (gameSlug: string) => {
    if (gameSlug === "oot") {
      return mockOotBoards;
    }

    return [];
  },

  findCategoriesByGameSlug: (gameSlug: string) => {
    if (gameSlug === "oot") {
      return mockOotCategories;
    }

    return [];
  },
};

export default leaderboardRepository;
