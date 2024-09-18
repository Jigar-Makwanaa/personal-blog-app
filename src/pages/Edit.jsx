import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import '../pages/pages.css'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [record, setRecord] = useState([])
    const navigate = useNavigate();
    const { editId } = useParams()

    // edit record start 
    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)

        let editData = oldRecord.find((val) => {
            return val.id == editId
        })

        setImg(editData.img)
        setTitle(editData.title)
        setContent(editData.content)


    }, [editId])
    // edit record end

    // update data start 

    const handleSubmit = () => {

        let updateEdit = record.map((val)=>{
            if(val.id == editId) {
                return{
                    ...val,
                    img : img,
                    title : title,
                    content : content
                }   
            }
            return val
        })

        setRecord(updateEdit)

        localStorage.setItem('user', JSON.stringify(updateEdit))

        navigate('/myfeed')

    }

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
