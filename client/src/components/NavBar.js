import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Wrapper, Logo, Nav} from './style'
import {Button} from '../styles'

function NavBar({currentUser}) {
    return (
        <>
        <Wrapper>
            {/* <Logo> {currentUser.name}'s </Logo> */}
            <Nav> 
                <Button as = {Link} to = "/map"> Map </Button>
                <Button as = {Link} to = "/"> Home </Button>
                <Button as = {Link} to = "/login">Log in </Button>
                <Button as = {Link} to ="/signup">Sign up </Button>
                <Button as = {Link} to = "/users/:id"> My Profile </Button>
            </Nav>
        </Wrapper>
        <Wrapper><Logo> All-Hikes </Logo></Wrapper>
        </>
    )
}

export default NavBar
