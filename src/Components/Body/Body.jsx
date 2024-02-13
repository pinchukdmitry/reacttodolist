import "./body.css";
import TaskForm from "../Form/TaskForm";

export default function Body() {
  return (
    <div className="wrapper">
      <div className="Header">To-Do LIST</div>
      <TaskForm />
    </div>
  );
}
