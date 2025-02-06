import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button text={"123"} type={"POSITIVE"} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
