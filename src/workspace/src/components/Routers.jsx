import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Game from "./Game";
import GameOver from "./GameOver";
import Wrapper from "./Wrapper";
import Login from "./Login";

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login></Login>} />
                <Route path="/" element={<Wrapper></Wrapper>}>
                    <Route path="Game" element={<Game></Game>} />
                    <Route path="GameOver" element={<GameOver></GameOver>} />
                </Route>
                <Route path="/*" element={<Game></Game>} />
            </Routes>
        </Router>
    )
}

export default Routers