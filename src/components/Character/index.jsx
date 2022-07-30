import React from 'react'
import { CardContainer, CardInformation, CardName, CardStatus, Figure, Image } from './styles'

export const Character = ({ image, name, species }) => {
  return (
    <CardContainer>
      <Figure>
        <Image src={image}></Image>
      </Figure>
      <CardInformation>
        <CardName>{ name }</CardName>
        <CardStatus>• { species }</CardStatus>
      </CardInformation>
    </CardContainer>
  )
}
