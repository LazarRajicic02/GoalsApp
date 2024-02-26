import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalProps {
  goals: CGoal[];
  onDelete: (id: number) => void;
}
export default function CourseGoalList({ goals, onDelete }: CourseGoalProps) {
  return (
    <ul>
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoal id={item.id} title={item.title} onDelete={onDelete}>
            <p>{item.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
