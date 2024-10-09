import { useState } from 'react'
import grass from "../assets/m1/grass.png"
import stump from "../assets/m1/stump.png"
import flower from "../assets/m1/flower.png"
import mushroom from "../assets/m1/mushroom.png"
import rock from "../assets/m1/rock.png"
import enemy from "../assets/m1/enemy1.png"
import player from "../assets/m1/player1.png"
import "../assets/styles/block.css"

function Block({ imageNum }) {
  const getImageSrc = (num) => {
    switch (num) {
      case 0:
        return grass;
      case 1:
        return stump;
      case 2:
        return flower;
      case 3:
        return mushroom;
      case 4:
        return rock;
      default:
        return '';
    }
  }
  return (
    <div className='images'>
      <img className='block' src={grass} alt="kusa" />
      <img className='block' src={getImageSrc(imageNum)} alt="kusa" />
    </div>
  )
}

export default Block
