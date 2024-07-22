import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const NewsDetail = (props: Props) => {
    const params = useParams()
    console.log(params);
    
  return (
    <div>NewsDetail</div>
  )
}

export default NewsDetail