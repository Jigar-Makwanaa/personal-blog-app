import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import '../pages/pages.css'
import { useNavigate, useParams } from 'react-router-dom'

const Discover = () => {

    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [record, setRecord] = useState([])
    const id = Math.floor(Math.random() * 1000)
    const navigate = useNavigate();
    const { editId } = useParams()

    // post add start 
    const handleSubmit = (e) => {
        e.preventDefault()

        const obj = {
            id, img, title, content
        }


        let allData = [...record, obj]

        setRecord(allData)

        localStorage.setItem('user', JSON.stringify(allData))


        setImg("")
        setTitle("")
        setContent("")

        navigate('/myfeed')

    }
    // post add end

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)

        // edit post start 

        // const editData = record.find((val) => {
        //     return val.id == editId
        // })

        // setImg(editData.img)
        // setTitle(editData.title)
        // setContent(editData.content)

        // edit post end

    }, [editId])

    // update data start 

    // update data end



    return (
        <>
            <Header />

            {/* add-post section start  */}

            <div className="add-post-section">
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="form">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <h3>Create Post</h3>

                                    <div className="img-url">
                                        <input type="text" placeholder='Enter img url' onChange={(e) => setImg(e.target.value)} value={img} />
                                    </div>
                                    <div className="blog-title">
                                        <input type="text" placeholder='Enter Blog title' onChange={(e) => setTitle(e.target.value)} value={title} />
                                    </div>
                                    <div className="blog-content">
                                        <input type="text" placeholder='Enter Blog content' onChange={(e) => setContent(e.target.value)} value={content} />
                                    </div>

                                    <div className="btn">
                                        <button type='submit'>Done</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* add-post section end */}

        </>
    )
}

export default Discover