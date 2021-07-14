import React from 'react'
import styled from 'styled-components'
import { UIcon } from '../../components/Icon/Index'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
          <a>
            <StyledLogo></StyledLogo>
          </a>
        <StyledOhter>
          <StyledNav>
            <StyledNavLink>Home</StyledNavLink>
            <StyledNavLink>About</StyledNavLink>
          </StyledNav>

          <StyledAccount>
              <a>
                <StyledAccountBtn>Sign In</StyledAccountBtn>
              </a>
          </StyledAccount>
        </StyledOhter>
      </StyledContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  border-bottom: 1px solid #eaeaea;
`
const StyledContainer = styled.div`
  max-width: 1400px;
  padding: 8px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`
const StyledLogo = styled(UIcon)`
  .icon-svg {
    width: 40px;
    height: 40px;
    font-size: 40px;
    fill: #1da1f2;
  }
`
const StyledOhter = styled.div`
  display: flex;
  align-items: center;
`
const StyledNav = styled.nav``
const StyledNavLink = styled.a`
  font-size: 16px;
  margin: 0 16px;
  color: #696969;
  &:hover {
    color: #333;
  }
`
const StyledAccount = styled.div`
  margin-left: 40px;
`
const StyledAccountBtn = styled.button`
  background-color: #1da1f2;
  border: 1px solid #1da1f2;
  padding: 8px 30px;
  border-radius: 30px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  transition: all .2s;
  font-weight: bold;
  &:hover {
    border-color: #1a91da;
    background-color: #1a91da;
  }
`

export default Header
