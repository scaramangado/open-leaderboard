import { GameRepository } from "../../data/games/game-repository";
import Game from "../model/game";
import GameResolver from "./game-resolver";

const gameRepositoryMock: GameRepository = {
  findAllGames: jest.fn(),
  findGameBySlug: jest.fn(),
};

const resolver = new GameResolver(gameRepositoryMock);

test("Returns full game list", () => {

  const games: Game[] = [
    {
      slug: "test1",
      name: "name1",
      releaseDate: new Date(Date.UTC(2021, 3, 20, 0, 0, 0)),
      mainBoardId: "test1_main",
    },
    {
      slug: "test2",
      name: "name2",
      releaseDate: new Date(Date.UTC(1990, 3, 20, 0, 0, 0)),
      mainBoardId: "test2_main",
    },
  ];

  givenRepositoryReturnsGames(games);

  expect(resolver.games())
    .toEqual(
      [
        {
          name: "name1",
          slug: "test1",
          releaseDate: "2021-04-20T00:00:00.000Z",
          mainBoardId: "test1_main",
        },
        {
          name: "name2",
          slug: "test2",
          releaseDate: "1990-04-20T00:00:00.000Z",
          mainBoardId: "test2_main",
        },
      ]
    );

});

test("Returns game with slug", () => {

  const game: Game = {
    slug: "test1",
    name: "name1",
    releaseDate: new Date(Date.UTC(2021, 3, 20, 0, 0, 0)),
    mainBoardId: "test1_main",
  };

  givenRepositoryReturnsGameForSlug(game);

  expect(resolver.game({ slug: "test1" }))
    .toEqual(
      {
        name: "name1",
        slug: "test1",
        releaseDate: "2021-04-20T00:00:00.000Z",
        mainBoardId: "test1_main",
      }
    );
});

function givenRepositoryReturnsGames(games: Game[]) {
  (<jest.Mock<Game[]>>gameRepositoryMock.findAllGames)
    .mockImplementation(() => games);
}

function givenRepositoryReturnsGameForSlug(game: Game) {
  (<jest.Mock<Game>>gameRepositoryMock.findGameBySlug)
    .mockImplementation(slug => game);
}
