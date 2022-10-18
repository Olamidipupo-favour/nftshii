import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';

import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';

const ConfettiComponent = lazy(() => import("../Confetti"));


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: lightblue;
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Storyline = styled.p`
font-size: ${props => props.theme.fontsm};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
`

const Tagline = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: normal;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontsm};
  }
`

const MemberComponent = ({img, name=" ",storyline=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Storyline>{storyline}</Storyline>
    </Item>
  )
}


const Story = () => {
  return (
    <Section id="story">
    <Suspense fallback={<Loading />}>
    <ConfettiComponent  /> </Suspense>
      <Title>Storyline</Title>    
      <Tagline>There is a story behind every scar and so was the case with Dexter, Rio, Wolfan, Stone, Theo and Fierreman. Five were orphans, their parents died of different circumstances and each grew up in different slums in the Continental city, denied access to learning or a good life like others and they were grossly undermined and bullied by the rich kids. Survival was a hard thing to do and they merely held on to their worn-out shirts even as the freezing nights threatened to take them off. As they grew, they came together and decided to form a brotherhood. Along the line, Theo joined in, though he was a wealthy kid but he was dissatisfied in the operations of those in power. They found out how the funds that ought to have been used to develop their homes had been directed into the personal pockets of the Mayor of Continental city and his cohorts. This tore through their hearts like lead.</Tagline>
      <Container>
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Theo.png"  name="Theo" storyline='Theo was the brains of the operation and was the only one who was rich amidst them.' />
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Stone.png" name="Stone" storyline='Stone was the brazen one with the gun and his name said all about his firmness.' />
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Rio.png"  name="Rio" storyline='Rio would never do without a stick of cigarette hanging from his lips.' />
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Fierreman.png" name="Fierreman" storyline='Fierreman was the youngest of them and always wore a smiling face with checkered shirts. He was literally the life of their raiding party.' />
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Dexter.png"  name="Dexter" storyline='Dexter grew with a confident beard and always had his black hat on, the boldest and of course, leader of the gang.' />
        <MemberComponent img="https://bdigitals.com.ng/wp-content/uploads/2022/10/Wolfman.png"  name="Wolfman" storyline='Wolfman always had his sunglasses on, a man of few words.' />
        

      </Container>
    </Section>
  )
}

export default Story