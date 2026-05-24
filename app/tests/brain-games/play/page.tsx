import QuizRunner from "../../../components/QuizRunner";
import { brainGamesData } from "../../../data/brainGamesData";

export default function BrainGamesPlayPage() {
  return <QuizRunner data={brainGamesData} />;
}
