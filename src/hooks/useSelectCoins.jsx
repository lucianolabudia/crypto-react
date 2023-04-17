import React from 'react'
import styled from '@emotion/styled';


const Label = styled.label`
    color: #FFF;
`


export const useSelectCoins = (label, options) => {
  
    const SelectCoins = () => (
        <>
            <Label>{ label }</Label>
            <select>
                <option value="">Seleccion</option>

                { options.map( option => (
                <option
                    key={ option.id }
                    value={ option.id }
                >{ option.name }</option>
            )) }
            </select>            
        </>
    )

    return [ SelectCoins ]
}
