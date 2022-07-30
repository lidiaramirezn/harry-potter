import { useEffect, useState } from 'react';
import { loadCharacters } from '../helpers';

export const useFetchApi = () => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(20);
  const [prev, setPrev] = useState(0);

  const getCharacters = async() => {
    const items = await loadCharacters();
    const selectedItems = items.slice(prev, count);
    setCharacters(selectedItems);
    setIsLoading(false);
  }

  useEffect(() => {
    getCharacters();
  }, [])

  return {
    characters,
    isLoading
  }
}