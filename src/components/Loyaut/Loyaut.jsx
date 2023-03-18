import { Navigation } from "components/Navigation/Navigation"
import { Outlet } from "react-router-dom";
import css from "./Loyaut.module.css"

export const Layout = () => {
    return (
        <>
            <header><Navigation/></header>
            <main className={css.main}><Outlet/></main>
        </>
    )
}