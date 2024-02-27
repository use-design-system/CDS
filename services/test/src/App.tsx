import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { variables } from "@lsj/themes";

function App() {
  const theme = {
    colors: variables.colors.$static.light,
  };

  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

const View = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text>Learn React</Text>
        </a>
      </header>
    </div>
  );
};

const Text = styled.div`
  color: ${({ theme }) => {
    // @ts-ignore
    return theme.colors.red[900];
  }};
`;
