import Game from "./game";

export default interface Leaderboard {
  id: string,
  name: string,
  game: Game,
  parent?: string,
  subBoards: string[],
  categories: string[],
  displayAsCategory: boolean,
}
