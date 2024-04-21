import { useEffect, useState } from "react";
import ReactLoading from 'react-loading'

import { Button, Flex, Screen, Typography } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { ThemeProvider } from "styled-components";

import { getPhotos } from "./services/photos";

import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { Stories } from "./components/stories";
import { Publications } from "./components/publications";

function App() {
  const PHOTOS_PER_PAGE = 8

  const [theme, setTheme] = useState("dark");
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE)

  const releaseLoading = () => setIsLoading(false)
  
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handlePhotosPerPage = () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE)
  }

  async function fetchPhotos() {
    setIsLoading(true)
    const data = await getPhotos(photosPerPage, releaseLoading)
    setPhotos(data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [photosPerPage])

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Screen>
          <NavBar themeToggler={themeToggler} theme={theme} />
          <Flex gap="2px">
            <Header />
            <Stories photos={photos}/>
            < Publications photos={photos}/>
            {isLoading ? (
              <ReactLoading type="bars" color={theme.textPrimary} height={26} width={35} />
            ): (
              <Button onClick={handlePhotosPerPage}>
                <Typography>Ver mais</Typography>
              </Button>
            )}
          </Flex>
        </Screen>
      </ThemeProvider>
    </>
  );
}

export default App;
