import gameRepository, { GameRepository } from "../../data/games/game-repository";
import Game from "../model/game";

function mapToGql(game?: Game): any {

  if (!game) {
    return undefined;
  }

  return {
    slug: game.slug,
    name: game.name,
    releaseDate: game.releaseDate.toISOString(),
  }
}

export default class GameResolver {

  #repository: GameRepository;

  constructor(repository: GameRepository = gameRepository) {
    this.#repository = repository;
  }

  games(): Game[] {
    return this.#repository.findAllGames().map(mapToGql);
  };

  game(args: any): Game | undefined {
    return mapToGql(this.#repository.findGameBySlug(args.slug));
  };
}
