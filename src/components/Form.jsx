import { useEffect } from 'react';
import styled from '@emotion/styled';
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

export const Form = () => {

    const [ coin, SelectCoins ] = useSelectCoins('Elige tu Moneda a Cotizar', coins);

    useEffect( () => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
            const response = await fetch(url);
            const result = await response.json();

        }
        consultAPI();
    }, [])

    return (
        <form>

            <SelectCoins />

            <InputSubmit 
                type="submit"
                value="Cotizar" 
            />

        </form>
    )
}
