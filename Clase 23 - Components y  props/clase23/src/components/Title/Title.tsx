import React from 'react'
import './title.css'

type TitleProps = {
    title: string
}

// props = {title}
// {title} = props

const Title = ({title} : TitleProps) => {
  return (
    <h1 style={{fontSize: 45}} className='title'>{title}</h1>
  )
}

export default Title