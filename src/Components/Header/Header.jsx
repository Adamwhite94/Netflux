import React from 'react'
import {
    HeaderContainer,
    HeaderElements,
    HeaderLogo,
    HeaderTitle
} from './HeaderStyles'
const Header = () => {
  return (
    <HeaderContainer>
        <HeaderElements>
            <HeaderLogo></HeaderLogo>
            <HeaderTitle>NetFlux</HeaderTitle>
        </HeaderElements>
    </HeaderContainer>
  )
}

export default Header