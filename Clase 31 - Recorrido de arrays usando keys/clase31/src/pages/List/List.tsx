import { useEffect, useState } from "react"
import { Character } from "../../interfaces/Character"

const base_url = "https://rickandmortyapi.com/api/character/"

//RenderList jsx
const RenderList = ({ characters }: { characters: Character[] }) => {
  return <></>
}

//List component
const List = () => {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState<Character[]>([])

  //fetch data
  useEffect(() => {}, [])

  const orderBySpecies = () => {}

  const handleNextPage = () => {}

  return (
    <div>
      <button onClick={handleNextPage}>Next page</button>
      <button onClick={orderBySpecies}>Order by species</button>
      <RenderList characters={characters} />
    </div>
  )
}

export default List
