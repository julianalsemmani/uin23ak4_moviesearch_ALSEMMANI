import React from 'react'
import Footer from '../Components/Footer'
import OneMovie from '../Components/OneMovie'


function SingleMoviePage() {
    return (
        <>
            <header>
                <h1>Movie Search</h1>
                <button onClick={() => window.history.back()}>Back</button>
            </header>

            <OneMovie />
            <Footer />
        </>
    )
}

export default SingleMoviePage