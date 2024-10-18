import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_URL } from '../utils/constants'
// Gpt page is this 
const GptSearch = () => {
  return (
    <div>
    <div className="absolute -z-10">
        <img
          src={BACKGROUND_URL}
          alt="logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch