import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Wrapper, Logo, Nav} from './style'
import {Button} from '../styles'

function NavBar() {
    return (
        <Wrapper>
            <Logo>All-Hikes</Logo>
            <Nav> 
                <Button as = {Link} to = "/"> Home </Button>
                <Button as = {Link} to = "/login">Log in </Button>
                <Button as = {Link} to = "/users/:id"> My Profile </Button>
            </Nav>
        </Wrapper>
    )
}

export default NavBar
