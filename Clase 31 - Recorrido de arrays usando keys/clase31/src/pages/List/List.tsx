import { useEffect, useState } from "react"
import { Character } from "../../interfaces/Character"
import { Response } from "../../interfaces/Response"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardCustom from "../../components/Card/CardCustom";
import Gallery from "../../components/Gallery/Gallery";

const base_url = "https://rickandmortyapi.com/api/character"

//RenderList jsx
const RenderList = ({characters}: {characters:Character[]}) => {
  return (
    <div>
      <Gallery>
        {characters.map((character) => {
          return <CardCustom character={character}/>
        })}
      </Gallery>
    </div>
  )
}

//List component
const List = () => {
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState<Character[]>([])

  //fetch data
  useEffect(() => {
    //IIFE
    (async ()=> {
      try {
        const response = await fetch(`${base_url}/?page=${page}`)
        if (!response.ok) throw Error('Error fetching...')
        const data: Response = await response.json()
        setCharacters(data.results)     
      } catch (error) {
        console.log(error)
        setError(true)
      }
    })()
  }, [page])

  const orderBySpecies = () => {
    const charactersSorted = [...characters]
    charactersSorted.sort((a, b) => a.species.localeCompare(b.species))
    setCharacters(charactersSorted)
  }

  const handleNextPage = () => {
    setPage(previousPage => previousPage + 1)
  }

  const handlePreviousPage = () => {
    setPage(previousPage => previousPage - 1)
  }

  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={handleNextPage}>Next page</Button>
        <Button onClick={handlePreviousPage}>Previous page</Button>
        <Button onClick={orderBySpecies}>Order by species</Button>
      </ButtonGroup>
      <RenderList characters={characters} />
      {error && (<span>An error ocurred</span>)}
    </>
  )
}

export default List
