import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '@/containers/Home'
import Login from '@/containers/Login'

const Page404 = () => (
  <div>page 404</div>
)

export default (
  <Routes>
    <Route path='/' exact element={<Home />}></Route>
    <Route path='/home' exact element={<Home />}></Route>
    <Route path='/login' exact element={<Login />}></Route>
    <Route path='*' exact element={<Page404 />}></Route>
  </Routes>
)