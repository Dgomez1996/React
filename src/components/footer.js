import React from 'react'


const Footer = (props) => {
  const onClickHandler = () =>{
    console.log("hiciste click")
  }
  return (
    <footer>        
        <div>
            <p> Todos los derechos reservados - 2021
                <b> DAMAR</b>
            </p>

        </div>
</footer>
  )
}

export default Footer 