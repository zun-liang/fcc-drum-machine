import { useEffect } from "react";
import styled from "styled-components";

import Drum from "./Drum";

import "./App.css";

const AppContainer = styled.div`
  width: 100%;
  height: var(--app-height);
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  useEffect(() => {
    setAppHeight();
    window.addEventListener("resize", setAppHeight);
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <main>
      <AppContainer>
        <Drum />
      </AppContainer>
    </main>
  );
};

export default App;
