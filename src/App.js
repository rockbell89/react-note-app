import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { Children } from "react";

const Wrapper = styled.main`
  background-color: #dcdcdc;
  display: flex;
  align-items: center;
  max-width: 100%;
  min-height: 100vh;
`;

const Container = styled.section`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  padding: 1rem 1rem;
`;

const AppContainer = styled.div`
  background-color: #fff;
  padding: 2rem 2rem;
  border: 4px solid #000;
  border-radius: 0.5rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <AppContainer>
            <Routes>
              <Route path="/" element={<List />}></Route>
              <Route path="/detail" element={<Detail />}></Route>
            </Routes>
          </AppContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
