import Field from "./Field"
import "../assets/styles/game.css"
import { useEffect, useState } from "react";
import { getFieldData } from "../api/api";
import Score from "./Score";
import { useNavigate } from "react-router-dom";
function Game() {

    const [fieldData, setFieldData] = useState([]);
    const [playerPosition, setPlayerPosition] = useState({ "x": 1, "y": 2, "state": 1 });
    const [enemyPosition, setEnemyPosition] = useState({ "x": 1, "y": 0, "state": 1 });
    const [isRunning, setIsRunning] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [drawPosition, setDrawPosition] = useState(0)
    const [score, setScore] = useState(0)
    const [unbeatable, setUnbeatable] = useState(false)
    const [speedUp, setSpeedUp] = useState({ speed: 0, step: 0 })
    const navigate = useNavigate();
    const init = async () => {
        const data = await getFieldData()
        setFieldData(data)
        setPlayerPosition({ "x": 1, "y": 2, "state": 1 })
        setEnemyPosition({ "x": 1, "y": 0, "state": 1 })
    }
    useEffect(() => {
        if (!isRunning || gameOver) return;
        const interval = setInterval(() => {

            setDrawPosition((prev) => prev + 1)
            setScore((prev) => prev + 10)
            setPlayerPosition((prev) => ({ ...prev, y: prev.y + 1, state: prev.state == 1 ? 2 : 1 }))
            setEnemyPosition((prev) => ({ ...prev, y: prev.y + 1, state: prev.state == 1 ? 2 : 1 }))
            setSpeedUp((prev) => {
                const step = prev.step + 1
                if (step >= 5) {
                    return ({ ...prev, speed: prev.speed + 1, step: 0 })
                }
                return ({ ...prev, step: step })
            })
        }, (1000 - (speedUp.speed * 100)))
        return () => clearInterval(interval);
    }, [isRunning, gameOver, speedUp])

    useEffect(() => {
        if (enemyPosition.y === playerPosition.y) {
            setIsRunning(false);
            setGameOver(true);
        }
    }, [playerPosition, enemyPosition])
    useEffect(() => {
        if (fieldData.length == 0) return
        switch (fieldData[playerPosition.y][playerPosition.x]) {
            case 1:
                if (!unbeatable) {
                    setPlayerPosition((prev) => ({ ...prev, y: prev.y - 1 }))
                } else {
                    itemDelete(playerPosition.y, playerPosition.x)
                    setUnbeatable(false)
                }
                break;
            case 2:
                itemDelete(playerPosition.y, playerPosition.x)
                setScore((prev) => prev + 100)
                break
            case 3:
                itemDelete(playerPosition.y, playerPosition.x)
                setUnbeatable(true)
                console.log("muteki", playerPosition, enemyPosition, speedUp, unbeatable);
                break
        }
    }, [playerPosition])
    useEffect(() => {
        if (fieldData.length == 0) return
        if (fieldData[enemyPosition.y][enemyPosition.x] != 0) {
            itemDelete(enemyPosition.y, enemyPosition.x)
        }
    }, [enemyPosition])

    useEffect(() => {
        function handleKeyDown(e) {
            if (gameOver) return;
            if (e.key === 'ArrowLeft' && playerPosition.x > 0) {
                setPlayerPosition((prev) => ({ ...prev, x: prev.x - 1 }))
                setEnemyPosition((prev) => ({ ...prev, x: prev.x - 1 }))
            } else if (e.key === 'ArrowRight' && playerPosition.x < 2) {
                setPlayerPosition((prev) => ({ ...prev, x: prev.x + 1 }))
                setEnemyPosition((prev) => ({ ...prev, x: prev.x + 1 }))
            } else if (e.key === ' ') {
                setIsRunning(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [playerPosition, gameOver]);
    useEffect(() => {
        if (gameOver) {
            localStorage.setItem('score', score);
            navigate('/GameOver');
        }
    }, [gameOver])
    useEffect(() => {
        init()
    }, [])
    const itemDelete = (y, x) => {
        setFieldData((prev) => {
            return prev.map((datas, row) => {
                return datas.map((data, column) => {
                    if (y != row || x != column) {
                        return data
                    }
                    else {
                        return 0
                    }
                })
            })
        })
    }
    return (
        <>
            <div className="center">
                <Score score={score} />
                <Field fieldData={fieldData} playerPosition={playerPosition} enemyPosition={enemyPosition} drawPosition={drawPosition} />
                
            </div>
        </>
    )
}

export default Game