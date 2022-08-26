import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const initialState = {
  favorites: [],
}

const API = 'https://rickandmortyapi.com/api/character/';

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  // useEffect(() => {
  //   fetch('https://rickandmortyapi.com/api/character/')
  //   .then(response => response.json())
  //   .then(data => setCharacters(data.results))
  // }, []);


  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  // const handlerSearch = () => {
  //   setSearch(searchInput.current.value);
  // }

  const handlerSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // })

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )

  return (
    <div className="Characters">
      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      <Search search={search} searchInput={searchInput} handlerSearch={handlerSearch} />

      {filteredUsers.map(character => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>

        </div>

      ))} 

    </div>
  );
}

export default Characters;