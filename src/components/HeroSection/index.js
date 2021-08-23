import {useState} from 'react'
import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
      <HeroContainer >
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
          </HeroBg>
          <HeroContent>
              <HeroH1>Virtual Banking Made Easy</HeroH1>
              <HeroP>Sing up for a new accoun and receive $250 in credit towards your next payment</HeroP>
              <HeroBtnWrapper>
              <Button to='singup' 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              > Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    )
}

export default HeroSection
