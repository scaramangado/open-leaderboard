import gameRepository, { GameRepository } from "../../data/games/game-repository";
import Game from "../model/game";
import GameResolver from "./game-resolver";

describe("Game Resolver Test", () => {


  test("Returns full game list", () => {

    const games: Game[] = [
      {
        slug: "test1",
        name: "name1",
        releaseDate: new Date(Date.UTC(2021, 3, 20, 0, 0, 0)),
      },
      {
        slug: "test2",
        name: "name2",
        releaseDate: new Date(Date.UTC(1990, 3, 20, 0, 0, 0)),
      },
    ];

    const repoMock: GameRepository = {
      findGameBySlug: (_slug: String) => undefined,
      findAllGames: () => games,
    }

    expect(new GameResolver(repoMock).games())
      .toEqual(
        [
          {
            name: "name1",
            slug: "test1",
            releaseDate: "2021-04-20T00:00:00.000Z",
          },
          {
            name: "name2",
            slug: "test2",
            releaseDate: "1990-04-20T00:00:00.000Z",
          },
        ]
      );

  });

  test("Returns game with slug", () => {

    const repoMock: GameRepository = {
      findGameBySlug: (slug: String) => {
        if (slug !== "test1") {
          return undefined;
        }

        return {
          slug: "test1",
          name: "name1",
          releaseDate: new Date(Date.UTC(2021, 3, 20, 0, 0, 0)),
        };
      },
      findAllGames: () => [],
    }

    expect(new GameResolver(repoMock).game({ slug: "test1" }))
      .toEqual(
        {
          name: "name1",
          slug: "test1",
          releaseDate: "2021-04-20T00:00:00.000Z",
        }
      );
  });

});


