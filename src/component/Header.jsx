import React from 'react'
import '../pages/pages.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="menu">
                                <div className="setting">
                                    <Link to={'/'}><i class="fa-solid fa-gear"></i></Link>
                                </div>
                                <div className="discover">
                                   <Link to={'/discover'}>Discover</Link>
                                </div>
                                <div className="myfeed">
                                    <Link to={'/myfeed'}>My Feed</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header