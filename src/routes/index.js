import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Error from '../page/Error'
import Navbar from '../Layouts/Navbar'
import BooksView from '../features/books/BooksView'
import AddBook from '../features/books/AddBook'
import EditBook from '../features/books/EditBook'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/show-books' element={<BooksView/>}/>
        <Route path='/add-book' element={<AddBook/>}/>
        <Route path='/edit-book' element={<EditBook/>}/>

        <Route path='*' element={<Error/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default Index
