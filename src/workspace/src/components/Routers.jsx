import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Game from "./Game";
import GameOver from "./GameOver";
import Wrapper from "./Wrapper";
import Login from "./Login";

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/app" element={<Wrapper />}>
                    <Route path="game" element={<Game />} />
                    <Route path="gameover" element={<GameOver />} />
                </Route>

                <Route path="/*" element={<Game />} />
            </Routes>
        </Router>
    );
}

export default Routers;