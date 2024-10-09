
import Block from "./Block";
import "../assets/styles/field.css"
import Player from "./Player";
import Enemy from "./Enemy";

function Field({ fieldData, playerPosition, enemyPosition, drawPosition }) {
    const field = fieldData.slice(drawPosition, drawPosition + 11)
    return (
        <div className="field">
            {
                field.map((row, y) => {
                    return <>
                        <Block imageNum={4} />
                        {row.map((data, x) => {
                            if (y == (playerPosition.y - enemyPosition.y) && playerPosition.x == x) {
                                return <Player key={`player:${y},${x}`} state={playerPosition.state}/>
                            }
                            else if (y == 0 && enemyPosition.x == x) {
                                return <Enemy key={`enemy:${y},${x}`} state={enemyPosition.state}/>
                            }
                            else {
                                return <Block key={`block:${y},${x}`} imageNum={data} />
                            }
                        })}
                        <Block imageNum={4} />
                    </>
                })
            }
        </div>
    )
}

export default Field