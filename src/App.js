import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import Main from './views/main/containers/MainContainer';
import NotFound from './views/shared/notFound/NotFound';


function App() {
  const { userInfo } = useSelector((state) => state.common);
  return (
    <Container>
      <GlobalStyle />
      <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route path="/view/:id" element={< />} /> */}

          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 20px;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
  `;

export default App;
