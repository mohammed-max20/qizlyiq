import QuizRunner from "../../../components/QuizRunner";
import { memoryTrainingData } from "../../../data/memoryTrainingData";

export default function MemoryTrainingPlayPage() {
  return <QuizRunner data={memoryTrainingData} />;
}
