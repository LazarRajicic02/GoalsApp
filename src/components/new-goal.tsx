import { useRef, useState, type FormEvent, ReactNode } from "react";
import InfoBox from "./Info";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export function NewGoal({ onAddGoal }: NewGoalProps) {
  const [error, setError] = useState<ReactNode>(null);
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const summary = summaryRef.current!.value;
    if (enteredGoal === "") {
      return setError(
        <InfoBox mode="warning" severity="high">
          Insert values for your goal and summary inputs.
        </InfoBox>
      );
    }
    setError(null);

    event.currentTarget.reset();
    onAddGoal(enteredGoal, summary);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input id="goal" type="text" ref={goalRef} />
        </p>
        <p>
          <label htmlFor="summary">Short summary</label>
          <input id="summary" type="text" name="summary" ref={summaryRef} />
        </p>
        <p>
          <button>Add goal</button>
        </p>
      </form>
      {error}
    </>
  );
}
