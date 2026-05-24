import QuizRunner from "../../../components/QuizRunner";
import { personalityTestData } from "../../../data/personalityTestData";

export default function PersonalityTestPlayPage() {
  return <QuizRunner data={personalityTestData} />;
}
