import React from 'react'
import Header from './Header'
import '../pages/pages.css'

const Home = () => {
    return (
        <>
            <Header />

            {/* setting-section start  */}

            <div className="setting-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="box">
                                <div className="img">
                                    <img src="https://img.freepik.com/premium-vector/coming-soon-banner-with-grunge-brush-stroke-vector-illustration_275806-2107.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* setting-section end */}

        </>
    )
}

export default Home