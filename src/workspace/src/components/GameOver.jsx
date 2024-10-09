import { useNavigate } from "react-router-dom";
import "../assets/styles/gameOver.css"
import Score from "./Score";
import { DeleteScore, getScores, login, postScore, updateNickname } from "../api/api";
import { useState, useEffect } from "react";
function GameOver() {

    const navigate = useNavigate();
    const score = localStorage.getItem("score");
    const [runking, setRunking] = useState([])
    const [postedScore, setPostedScore] = useState(false)
    const [id, setId] = useState(null)


    /**
     * スコアの取得
     */
    useEffect(() => {
        const fetchScores = async () => {
            try {
                const scores = await getScores();
                setRunking(scores);
            } catch (error) {
                console.error("スコアの取得に失敗しました:", error);
            }
        };
        fetchScores();
    }, []);

    const uploadScore = async () => {
        const nickname = window.prompt("ニックネームを入力")
        if (!nickname) {
            return
        }
        const message = await postScore(nickname, score)
        setPostedScore(true)
        setId(message.id)
        alert(message.message)
    }
    const updateNick = async (id) => {

        const nickname = window.prompt("新しいニックネームを入力")
        if (!nickname) {
            return
        }

        const message = await updateNickname(id, nickname)
        alert(message)

    }
    const deleteData = async (id) => {

        if (window.confirm("本当に削除しますか？")) {
            const message = await DeleteScore(id)
            alert(message)

        }
    }

    return (
        <div className="center">
            <div className="back">
                <h1>GAME OVER</h1>
                <h2>今回のスコア</h2>
                <Score score={score} />
                
                {!postedScore ? (
                    <button onClick={uploadScore}>スコア投稿</button>
                ) : (
                    <>
                        <button onClick={() => updateNick(id)}>ニックネーム更新</button>
                        <button onClick={() => deleteData(id)}>投稿スコア削除</button>
                    </>
                )}
                <h2>ランキング</h2>
                {runking.map((runk, index) => (
                    <div className="ranking-flex" key={index}>
                        <h3>{runk.nickname}</h3>
                        <Score score={runk.score} />
                    </div>
                ))}
                <button onClick={() => navigate("/app/game")}>リプレイ</button>
                <button onClick={() => {
                    sessionStorage.removeItem("token")
                    navigate("/")
                }}>ログアウト</button>
            </div>
        </div>
    )
}

export default GameOver