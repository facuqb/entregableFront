import { useState } from "react"
import { Card } from "./Card";

export const FormSong = ({displayError}) => {

    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [list,setList] = useState ([]);
    const [error,setError] = useState ("");
    const onChangeArtist = (e) =>{
        setArtist(e.target.value);
    };
    const onChangeSong = (e) =>{
        setSong(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if((artist.trim().length < 3 || artist.trim() === "" || artist[0] === " ") ||
         (song.trim().length < 6 || song.trim() === "" || song[0]=== "") ){
            setError("El artista y la canción son invalidas");
            displayError(error);
            return;
         }
        if(artist.trim().length < 3 || artist.trim() === "" || artist[0] === " "){
            setError("El artista es invalido");
            displayError(error);
            return; 
        }
        if(song.trim().length < 6 || song.trim() === "" || song[0]=== ""){
            setError("La canción es invalida");
            displayError(error);
            return;
        } else{
            setList([...list,artist,song])
            setArtist("");
            setSong("");
            setError("")
        }
    }

    
  return (
    <>
        <form>
            <input 
            type="text" 
            id="artist"
            placeholder="Ingrese el Artista"
            value={artist}
            onChange={onChangeArtist}
    
            />
            <input type="text"
            id="song"
            placeholder="Ingrese la canción"
            value={song}
            onChange={onChangeSong}
            />
            <button 
            type="submit"
            onClick={handleSubmit}
            onSubmit={handleSubmit}
            > Enviar </button>
        </form>
        {list.lenght > 0 ? <Card list={list} /> : null}
    </>
  )
}
