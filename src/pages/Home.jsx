import "../assets/css/home.css";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="Main">
      <h1 className="title">TIC TAC TOE</h1>
      <div className="app">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
