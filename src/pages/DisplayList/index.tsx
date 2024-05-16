import React from 'react'
import './styles.css'

const DisplayList = () => {

  const lista = [
    "Transistor",
    "Crypt of the NecroDancer",
    "Dungeon of the Endless",
    "Shovel Knight",
    "TowerFall - Ascension",
    "The Binding of Isaac: Rebirth",
    "Dark Souls II",
    "Alien: Isolation",
    "Child of Light",
    "Crawl ",
    "Crypt of the NecroDancer",
    "Duck Game"
  ]



  return (

    <div className="display_list_container">


    <div className='display-list'>
        <h1>Melhores jogos 2014</h1>
        <ul>
            {lista.map((item) => 
                (<li>{item}</li>)
            )}
        </ul>
    </div>

    </div>

  )
}

export default DisplayList