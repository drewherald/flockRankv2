import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState, createContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import SongPage from "./pages/SongPage";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";
import UserPage from "./pages/UserPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Photos from "./pages/Photos";

const theme = createTheme({
  typography: {
    fontFamily: "ms_sans_serif",
  },
});


function App() {
  const [songList, setSongList] = useState<string[]>([]);
  const [toggleColorMode, setToggleColorMode] = useState(false);

  const setColorMode = () => {
    setToggleColorMode(!toggleColorMode);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(
        "https://elgoose.net/api/v2/songs?order_by=name"
      );
      const json = await response.json();
      const length = await Object.keys(json.data).length;
      const placeHolder: string[] = [];

      if (response.ok) {
        for (let i = 0; i < length; i++) {
          if (!placeHolder.includes(json.data[i].name)) {
            placeHolder.push(json.data[i].name);
          }
        }
        setSongList(placeHolder);
      } 
    };

    fetchSongs();
  }, []);

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <SongContext.Provider value={{ songList, setColorMode }}>
          <CssBaseline />
          <Container disableGutters maxWidth={false}>
            <Navbar />
            <Box className="pages" sx={{ minHeight: "80svh" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/songs/:id" element={<SongPage />} />
                <Route path="/user/:id" element={<UserPage />} />
              </Routes>
            </Box>
            <Footer />
          </Container>
        </SongContext.Provider>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
