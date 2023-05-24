import { Suspense } from "react";
import  { Outlet } from "react-router-dom";
import AppBar  from './components/appBar/AppBar';        

const Layout =() => {
    return (
        <>
        <AppBar />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Outlet/>
            </Suspense>
        </>

    )
}

export default Layout;