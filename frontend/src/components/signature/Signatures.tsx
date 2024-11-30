import {colors} from "../../styles/styleConstants";
import React, {useState} from "react";
import {Spinner} from "@alfalab/core-components/spinner";
import {SignatureItem} from "./SignatureItem";
import {Signature} from "./types";
import {GridWrapper} from "../../styles/GridWrapper";

export const Signatures = () => {
    const [isLoading, setIsLoading] = useState(false);

    const showSpinner = <Spinner visible={isLoading} preset={16}/>

    const showItemsSignature = [{
        id: 1, name: 'Подпись', description: 'Это подпись, ей надо подписывать.'
    }, {
        id: 2, name: 'Подпись', description: 'Это подпись, ей НЕ надо подписывать.'
    }, {
        id: 3, name: 'Подпись', description: 'Это подпись, ей надо подписывать.'
    }, {
        id: 4, name: 'Подпись', description: 'Это подпись, ей НЕ надо подписывать.'
    }, {
        id: 5, name: 'Подпись', description: 'Это подпись, ей надо подписывать.'
    }, {
        id: 6, name: 'Подпись', description: 'Это подпись, ей НЕ надо подписывать.'
    }

    ]

    const showSignatures = <GridWrapper >
        {showItemsSignature?.map((signature: Signature) => <SignatureItem key={signature.id} {...signature}  />)}
    </GridWrapper>

    return (
        <div style={{width: '100%'}}>
            <span style={{color: colors.darkNeutral}}>Вы выбрали нас</span>
            <h1>Мы выбрали <span style={{color: colors.thirtyLight}}>лучшее </span> для вас</h1>
            {!showItemsSignature.length ? showSpinner : showSignatures}
        </div>
    );
}
