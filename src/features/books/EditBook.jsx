import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBook } from './BookSlice';

const EditBook = () => {
  const loaction = useLocation();
  
  const [id,setId] = useState(loaction.state.id)
  const [title,setTitle] = useState(loaction.state.title)
  const [author,setAuthor] = useState(loaction.state.author)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(updateBook({id,title,author}));
    navigate("/show-books",{replace:true})


  }
  return (
    <div>
      <h2>Edit Book </h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title : </label>
          <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label>Author : </label>
          <input type="text" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>
        <button type='submit'>Update book</button>
      </form>
    </div>
  )
}

export default EditBook
