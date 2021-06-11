import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

export const ServicesContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
`
export const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

export const ServiceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 876px) {
        grid-template-columns: 1fr;
    }
`

export const ServiceCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0ms.2s ease;
`
export const ServiceImage = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
        filter: brightness(100%);
    }
`

export const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px) {
        padding: 0 1rem;
    }
`

export const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
    margin-right: 0.5rem;

    @media screen and (max-width: 876px) {
        font-weight: normal;
        top: 350px;
    }
`

export const ServiceTitle = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-left: 0.5rem;
`
