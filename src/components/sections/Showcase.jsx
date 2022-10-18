import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ETH from '../../assets/icons8-ethereum-48.png'
const Toast = (story) => {
        toast.info(story, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };
const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;

  }
}
&>*:last-child{
  animation-duration: 15s;
  @media (max-width: 30em){
    animation-duration: 10s;

  }
}
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing:content-box;
margin: 2rem 0;
display: flex;

animation: ${move}  linear infinite ${props => props.direction};


`
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color:${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
  width: 12rem;
  }
  @media (max-width: 30em){
  width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};

  }

}

`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;

}
`

const NftItem = ({img, title="mobstars",story=" ", number=0, price=0, passRef}) => {

let play = (e) => {
  passRef.current.style.animationPlayState = 'running';
}
let pause = (e) => {
  passRef.current.style.animationPlayState = 'paused';
}
const notify = (story=" ") => toast(story);


  return(
    <ImgContainer   onMouseOver={e => pause(e) }  onMouseOut={e => play(e) }>
      <img width={500} height={400}  src={img} alt={title} />
      <Details>
        <div>
          <span>{title}</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
          <img width={200} height={200}  src={ETH} alt="ETH" />
          <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
        
      </Details>
    </ImgContainer>
  )
} 


const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return(
    <Section id="showcase">
    <Row direction="none" ref={Row1Ref}>
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Stone.png"  title="Stone" number={852} price={1}  story="Wo" passRef = {Row1Ref} />
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Theo.png"  title="Theo" number={123} price={1.2}   story= "bruv" passRef = {Row1Ref} />
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Wolfman.png" title="Wolfman"  number={456} price={2.5}  story="we go dey alright" passRef = {Row1Ref} />
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Dexter.png" title="Dexter"  number={666} price={3.5} story="Useless innit"  passRef = {Row1Ref} />
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Fierreman.png" title="Fierreman" number={452} price={4.7}  story="lorem Ipsum dolor" passRef = {Row1Ref} />
      <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Rio.png"  title="Rio" number={452} price={4.7}  story="lorem Ipsum dolor" passRef = {Row1Ref} />


    </Row>
    <Row direction="reverse" ref={Row2Ref}>
    <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Rio.png" title="Rio" number={452} price={4.7}  story="lorem Ipsum dolor" passRef = {Row2Ref} />
<NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Fierreman.png"  number={452} price={4.7} title="Fierreman" story="lorem Ipsum dolor" passRef = {Row2Ref} />
 <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Dexter.png"  title="Dexter" number={666} price={3.5} story="Useless innit"  passRef = {Row2Ref} />
  <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Wolfman.png"  title="Wolfman" number={456} price={2.5}  story="we go dey alright" passRef = {Row2Ref} />
  <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Theo.png"  title="Theo" number={123} price={1.2}   story= "bruv" passRef = {Row2Ref} />
  <NftItem img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Stone.png"  title="Stone" number={852} price={1}  story="Wo" passRef = {Row2Ref} />
    </Row>
    </Section>
  )
}

export default Showcase