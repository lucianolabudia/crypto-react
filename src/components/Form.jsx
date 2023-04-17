import React from 'react'
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
    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

export const Form = () => {

    const [ SelectCoins ] = useSelectCoins('Elige tu Moneda a Cotizar', coins);

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
