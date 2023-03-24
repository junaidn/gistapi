import styled from "styled-components";
import { GistList } from "./components/GistList/GistList";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState(null);
  return (
    <Wrapper className="App" data-testid="app">
      <Header onSearchChange={(value) => setSearchKeyword(value)} />
      <GistList searchKeyword={searchKeyword} />
      <GlobalStyles />
      {/** Toaster to show notifications */}
      <Toaster />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
