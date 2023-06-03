import React, { useState } from "react"
import { FormSong } from "./components/FormSong"
export const App = () => {

  const [favouriteS, setFavouriteS] = useState({});
  const [displayErrorT, setDisplayErrorT] = useState ("");
  const [cancionFavorita, setCancionFavorita] = useState({})

  
  const handleError = (displayError) =>{
    setDisplayErrorT(displayError);
  }


  return (
    <>
    <h1>
      Inserte su canción favorita
    </h1>
    <FormSong  displayError={handleError} />
    {displayErrorT ? <p>{displayErrorT}</p> : null }


  
    </>
  )
}
