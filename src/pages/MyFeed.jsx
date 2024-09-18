import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import '../pages/pages.css'
import { Link, useNavigate } from 'react-router-dom'

const MyFeed = () => {

    const [record, setRecord] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)
    }, [])

    console.log(record);

    // delete post start 

    const deleteRecord = (id) => {
        let deleteData = record.filter((val) => {
            return val.id != id
        })

        setRecord(deleteData);

        localStorage.setItem('user', JSON.stringify(deleteData))

    }

    // delete post end

    return (
        <>
            <Header />

            {/* all post secion start  */}
            <div className="all-post-section">
                <div className="container">
                    <div className="row">
                        <div className="main">

                            {
                                record.map((val) => {
                                    return (
                                        <div className="box">
                                            <div className="details">
                                                <div className="title">
                                                    <div className="left">
                                                        <h3>{val.title}</h3>
                                                    </div>
                                                    <div className="right">
                                                        <div className="action">
                                                            <div className="edit">
                                                                <Link to={`/discover/${val.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                                                            </div>
                                                            <div className="delete">
                                                                <i onClick={() => deleteRecord(val.id)} class="fa-solid fa-trash"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="img">
                                                    <img src={val.img} alt="" />
                                                </div>
                                                <div className="content">
                                                    <div className="icon">
                                                        <div className="left">
                                                            <ul>
                                                                <li ><i class="fa-solid fa-heart"></i></li>
                                                                <li>
                                                                    <i class="fa-regular fa-comment"></i>
                                                                </li>
                                                                <li>
                                                                    <i class="fa-regular fa-share-from-square"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="right">
                                                            <span>
                                                                <i class="fa-regular fa-floppy-disk"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="disc">
                                                        <p>{val.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* all post secion end */}

        </>
    )
}

export default MyFeed