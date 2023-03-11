import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';

const AddBook = () => {
  const [title,setTitle]= useState("");
  const [author,setAuthor]= useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const numberOfBook = useSelector((state)=>state.booksReducer.books.length)

  const handleSubmit = (e)=>{
    e.preventDefault();
    const book = {id: numberOfBook + 1 ,title,author};
    dispatch(addBook(book));
    navigate("/show-books",{replace:true})

  }
  return (
    <div>
      <h2>Add boook</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title : </label>
          <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          <label>Author : </label>
          <input type="text" id="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>
        <button type='submit'>Add book</button>
      </form>
    </div>
  )
}

export default AddBook
