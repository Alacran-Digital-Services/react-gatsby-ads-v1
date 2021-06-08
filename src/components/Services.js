import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Services = () => {

    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allServicesJson {
                edges {
                    node {
                        alt
                        button
                        name
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `)

    function getServices(data) {
        const servicesArray = []
        
        data.allServicesJson.edges.forEach((item, index) => {
            const image = getImage(item.node.image)
            servicesArray.push(
                <div key={index}>
                    <GatsbyImage
                        image={image}
                        alt={item.node.alt}
                        placeholder="blurred">
                    </GatsbyImage>
                </div>
            )
        })
        return servicesArray;
    }

    return (
        <ServicesContainer>
            <ServicesHeading>Heading</ServicesHeading>
            <ServiceWrapper>{getServices(data)}</ServiceWrapper>
        </ServicesContainer>
    )
}

export default Services

const ServicesContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: blue;
    color: #fff;
`
const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ServiceWrapper = styled.div``
