import React from 'react'
import {Button} from '../ButtonElements'

//import imgg from '../../images/svg-1.svg'

import { 
    Column2, 
    Img, 
    ImgWrap,
    InfoContainer, 
    InfoRow, 
    InfoWrapper,  
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap } from './InfoElements'

const InfoSection = (
    {   ligthBack, 
        lightBg,
        id, 
        primary,
        topLine, 
        ligthText, 
        headline, 
        darkText, 
        description,
        buttonLabel, 
        img, 
        alt, 
        dark,
        dark2,
        imgStart}) => {

            


    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading ligthText={ligthText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 0 : 1}
                                      
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img id="imagem" src={img} alt={alt}></Img>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
