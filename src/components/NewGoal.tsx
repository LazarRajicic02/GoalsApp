import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const summary = summaryRef.current!.value;
    event.currentTarget.reset();
    onAddGoal(enteredGoal, summary);
  }

  return (
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
  );
}
