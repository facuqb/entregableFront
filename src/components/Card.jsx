//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario


export const Card = (list) => {
 
const [artist,song] = list;

  return (
    <div>
      <h2>Tu canción favorita es:</h2>
      <p>{artist}</p>
      <p>{song}</p>
    </div>
  )
}
