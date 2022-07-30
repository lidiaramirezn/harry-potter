import React, { useContext } from 'react'
import { Button, Image, NabvarContainer } from './styles'
import flagEs from './../../assets/es.svg';
import flagEn from './../../assets/en.svg';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../Hooks';

export const Navbar = () => {

  const languageCharacter = useContext(langContext);

  return (
    <NabvarContainer>
      <FormattedMessage id="title" defaultMessage="Personajes"/>
      <div>
        <Button onClick={() => languageCharacter.setLanguage('es')}>
          <Image src={flagEs} alt="bandera de españa"/>
        </Button>
        <Button onClick={() => languageCharacter.setLanguage('en')}>
          <Image src={flagEn} alt="bandera de españa"/>
        </Button>
      </div>
    </NabvarContainer>
  )
}
