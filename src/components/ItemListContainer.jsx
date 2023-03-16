
import logo from '../images/logoCrane.png'




export const ItemListContainer = ({greetings}) => {
  return (
    <>
        <div>
            <h1 class='titulo'> {greetings} <img src={ logo } alt='logoCrane'></img></h1>
        </div>

        <p> Aqui irian las cards de los productos</p>
        

    </>
  )
}



