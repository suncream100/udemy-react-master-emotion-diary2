import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
const Home = () => {
  return (
    <>
      <Header
        title={"2025년 2월"}
        leftChild={<Button text="<" />}
        rightChild={<Button text=">" />}
      />
      <DiaryList />
    </>
  );
};

export default Home;
