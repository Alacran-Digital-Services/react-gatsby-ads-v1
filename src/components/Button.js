import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#B2289B' : '#FF0064')};
    whie-space: nowrap;
    padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
    color: #FFF;
    font-size: ${({big}) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s; !important;
    border-radius: ${({round }) => (round ? '50px' : 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#FF0064' : '#B2289B')};
        transform: translateY(-2px)
    }
`