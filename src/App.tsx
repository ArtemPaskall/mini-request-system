import Header from "./components/Header/Header";
import User from "./components/User/User";
import Manager from "./components/Manager/Manager";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const mode = useSelector((state: RootState) => state.mode.mode);

  return (
    <div className={`${'theme'}  ${mode !== "USER" ? "theme-manager" : ""}`}>
      <Header></Header>

      {mode === "USER" && <User />}
      {mode === "MANAGER" && <Manager />}
    </div>
  );
}

export default App;
