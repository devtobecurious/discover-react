import { Outlet } from "react-router";
import "./App.css";
import { ThemeContextProvider } from "./shared/uis/context/ThemeContextProvider";
import { MainLayout } from "./shared/uis/layouts/components/MainLayout";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <MainLayout>
          <Outlet />
        </MainLayout>
      </ThemeContextProvider>
    </>
  );
}

export default App;
