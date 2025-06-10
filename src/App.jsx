import { useState } from 'react'
import './App.css'
import MovieList from './MovieList'

export default function App(){
  return(
   <div>
    <h1>Check the movie:</h1>
    <MovieList />
   </div>
  )
}