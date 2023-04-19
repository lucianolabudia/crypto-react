import styled from "@emotion/styled";

export const Result = ({result}) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

    return (
        <div>
            <p>El Precio es de: <span>{ PRICE }</span></p>
            <p>Precio mas alto del dia: <span>{ HIGHDAY }</span></p>
            <p>Precio mas bajo del dia: <span>{ LOWDAY }</span></p>
            <p>Variacion ultimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></p>
            <p>Ultima actualizacion: <span>{ LASTUPDATE }</span></p>
        </div>
    )
}
