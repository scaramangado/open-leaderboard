import Game from "./game";
import Leaderboard from "./leaderboard";
import Submission from "./submission";

export default interface Category {
  id: string,
  name: string,
  game: Game,
  leaderboard: Leaderboard,
  submissions: Submission[],
}
