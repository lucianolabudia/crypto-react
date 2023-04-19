import { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import ImgCrypto from './img/imagen-criptos.png';
import { Form } from './components/Form';
import { Result } from './components/Result';
import { Spinner } from './components/Spinner';



// STYLED COMPONENTS
const Container = styled.div`
  max-width: 900px;
  margin: o auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`


function App() {
  
  const [ coins, setCoins ] = useState({});
  const [ result, setResult ] = useState({});
  const [ charging, setCharging ] = useState(false);

  useEffect( () => {
    if (Object.keys(coins).length > 0) {
      
      const quoteCrypto = async () => {

        setCharging(true);
        setResult({});

        const { coin, cryptoCoin } = coins
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`
        
        const response = await fetch(url);
        const result = await response.json();

        setResult(result.DISPLAY[cryptoCoin][coin]);

        setCharging(false);
      }

      quoteCrypto();
    }
  }, [coins])
  


  return (
    <Container>
      <Image
        src={ ImgCrypto }
        alt='Imagen Criptomonedas'
      />

      <div>
        <Heading>Cotizador de Criptomonedas al Instante</Heading>
        <Form 
          setCoins={setCoins}
        />

        { charging && <Spinner /> }
        { result.PRICE && <Result result={result} /> }
      </div>
      

    </Container>
  )
}

export default App
