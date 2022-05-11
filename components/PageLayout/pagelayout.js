import { useState } from "react"
import Head from 'next/head'



import MainNav from "./MainNav"
import PageNav from "./PageNav"

const PageLayout = ({ children }) => {
    const [currentPage, setCurrentPage] = useState("Dar View")
    return (
        <div className="page-wrapper">
            <Head>
                <link rel="icon" type="image/ico" href="./favicon.png" />
                <title>Trial</title>
            </Head>
            <header>
                <MainNav setCurrentPage={setCurrentPage}/>
            </header>

            <main className="main">
                <PageNav currentPage={currentPage} />
                {children}
            </main>
        </div>
    )
}

export default PageLayout
