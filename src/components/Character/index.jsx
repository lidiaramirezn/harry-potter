import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CardContainer, CardInformation, CardName, CardStatus, Figure, Image } from './styles'

export const Character = ({ image, name, species }) => {
  return (
    <CardContainer>
      <Figure>
        <Image src={image}></Image>
      </Figure>
      <CardInformation>
        <CardName>{ name }</CardName>
        <CardStatus>• <FormattedMessage id={`${species}`} /> { }</CardStatus>
      </CardInformation>
    </CardContainer>
  )
}
