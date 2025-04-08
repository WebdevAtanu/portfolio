import AccountMenu from "./component/Menu";
import Intro from "./component/Intro";
import Field from "./component/Field";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Project from "./component/Project";
import Github from "./component/Github";
import Footer from "./component/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <AccountMenu />
      <Intro />
      <Field />
      <Skill />
      <Work />
      <Project />
      <Github />
      <Footer />
    </>
  );
}

export default App;
