import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Error } from './Error';
import { useSelectCoins } from '../hooks/useSelectCoins';
import { coins } from '../data/coins';


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

export const Form = ({setCoins}) => {

    const [ cryptos, setCryptos ] = useState( [] );
    const [ error, setError ] = useState( false );

    const [ coin, SelectCoins ] = useSelectCoins('Elige tu Moneda a Cotizar', coins);
    const [ cryptoCoin, SelectCryptoCoin ] = useSelectCoins('Elige la Criptomoneda', cryptos);


    useEffect( () => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const response = await fetch(url);
            const result = await response.json();

            const arrayCryptos = result.Data.map( crypto => {

                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }
                    
                return object;

            } );

            setCryptos( arrayCryptos );

        }
        consultAPI();
    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        if ( [coin, cryptoCoin].includes('') ) {
            setError( true );
            return
        }

        setError( false );
        setCoins({
            coin,
            cryptoCoin
        })
    }

    return (

        <>
            { error && <Error>Todos los camErroros son obligatorios</Error> }

            <form
                onSubmit={ handleSubmit }
            >
                <SelectCoins />
                <SelectCryptoCoin />

                <InputSubmit 
                    type="submit"
                    value="Cotizar" 
                />

            </form>
        </>
    )
}
