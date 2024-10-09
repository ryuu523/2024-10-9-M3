import { Outlet } from "react-router-dom"
import Auth from "./Auth"

function Wrapper() {
    return (
        <Auth>
            <Outlet />
        </Auth>
    )
}
export default Wrapper