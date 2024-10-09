
import "../assets/styles/block.css"
import grass from "../assets/m1/grass.png"
import enemy1 from "../assets/m1/enemy1.png"
import enemy2 from "../assets/m1/enemy2.png"
function Enemy({state}) {

    return (
        <div className="images">
            <img className="block" src={grass} />
            <img className="block" src={state == 1 ? enemy1 : enemy2} />
        </div>
    )
}

export default Enemy