import { type ReactNode } from "react";
import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./Info";

interface CourseGoalProps {
  goals: CGoal[];
  onDelete: (id: number) => void;
}
export default function CourseGoalList({ goals, onDelete }: CourseGoalProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet</InfoBox>;
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals.Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((item) => (
          <li key={item.id}>
            <CourseGoal id={item.id} title={item.title} onDelete={onDelete}>
              <p>{item.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
