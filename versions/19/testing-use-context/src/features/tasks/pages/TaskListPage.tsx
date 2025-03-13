import { AddTask } from "../components/AddTask";
import { TaskContextProvider } from "../components/TaskContextProvider";
import { TaskList } from "../components/TaskList";
import { LayoutListPage } from "./LayoutListPage";

export const TaskListPage = () => {
  return (
    <>
      <TaskContextProvider>
        <LayoutListPage>
          <AddTask></AddTask>
          <TaskList></TaskList>
        </LayoutListPage>
      </TaskContextProvider>
    </>
  );
};
