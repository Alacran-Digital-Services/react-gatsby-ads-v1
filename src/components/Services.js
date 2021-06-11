import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { Button } from './Button'

import { ServiceCard, ServiceImage, ServiceInfo, TextWrap, ServiceTitle, ServicesContainer, ServicesHeading, ServiceWrapper } from "./styles/ServicesStyles"

const Services = ({heading}) => {

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
                <ServiceCard key={index}>
                    <ServiceImage
                        image={image}
                        alt={item.node.alt}
                        placeholder="blurred">
                    </ServiceImage>
                    <ServiceInfo>
                        <TextWrap>
                            <ServiceTitle>{item.node.name}</ServiceTitle>
                        </TextWrap>
                        <Button primary="true"
                            round="true" css={`position: absolute; top: 420px; font-size: 14px`}>{item.node.button}</Button>
                    </ServiceInfo>
                </ServiceCard>
            )
        })
        return servicesArray;
    }

    return (
        <ServicesContainer>
            <ServicesHeading>{heading}</ServicesHeading>
            <ServiceWrapper>{getServices(data)}</ServiceWrapper>
        </ServicesContainer>
    )
}

export default Services

