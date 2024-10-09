import "../assets/styles/block.css"
import grass from "../assets/m1/grass.png"
import player1 from "../assets/m1/player1.png"
import player2 from "../assets/m1/player2.png"
function Player({state}){

    return(
        <div className="images">
            <img className="block" src={grass} />
            <img className="block" src={state==1 ? player1 : player2} />
        </div>
    )
}

export default Player 