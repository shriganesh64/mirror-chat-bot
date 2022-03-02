import { ThemeProvider } from "@mui/material";
import AllChatContainer from "./Components/AllChatContainer";
import theme from "./Theme/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AllChatContainer />
    </ThemeProvider>
  );
}

export default App;
