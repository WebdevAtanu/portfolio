import React, { useState, useMemo, createContext } from "react";
import AccountMenu from "./component/Menu";
import Intro from "./component/Intro";
import Field from "./component/Field";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Project from "./component/Project";
import Freelance from "./component/Freelance";
import Github from "./component/Github";
import Footer from "./component/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./component/Theme";
import clsx from "clsx";
AOS.init();

export const themeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light");

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <themeContext.Provider value={{ toggleMode, mode }}>
          <CssBaseline />
          <div className={clsx("app-shell", mode === "dark" && "surface-dark")}>
            <AccountMenu />
            <Intro />
            <Field />
            <Skill />
            <Work />
            <Project />
            <Freelance />
            <Github />
            <Footer />
          </div>
        </themeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
