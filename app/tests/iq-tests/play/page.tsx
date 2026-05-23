import QuizRunner from "@/app/components/QuizRunner";
import { iqTestData } from "@/app/data/iqTestData";

export default function IQTestPlayPage() {
  return <QuizRunner data={iqTestData} />;
}
