import React from 'react'
import styled from 'styled-components'


const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <video src="https://bdigitals.com.ng/wp-content/uploads/2022/10/Home-Video.mp4" type="video/mp4" autoPlay muted loop  />
    </VideoContainer>
  )
}

export default CoverVideo