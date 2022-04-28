import React, {useState} from 'react';
import {HomeComponentsProps} from "../../app/types";
import {SDInputRadioDasauNu} from "../form/SDInputRadioDasauNu";
import {SDInputForm} from "../form/SDInputForm";
import {
    SDInputHandleControlChangeEvent,
    SDInputHandleControlChangeEventWithNameValue
} from "../form/SDFormInputHandleControlChange";
import {SDButtonStd} from "../common/SdButtonStd";
import {Footer} from "../common/Footer";
import {SDCustomModal} from "../form/SDCustomModal";

export const InscrierePage: React.FC<HomeComponentsProps> = (props) => {
    const defaultInputsState = {
        varsta_peste_18: "",
        acord_regulament: "",
        telefon: "",
    };

    //inputs
    const [inputs, setInputs] = React.useState<{
        [key: string]: any;
    }>(defaultInputsState);
    //modal
    const [modal, setModal] = useState({
        open: false,
        title: '',
        message: ''
    });
console.log(inputs)
    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.name == "telefon") {
            SDInputHandleControlChangeEventWithNameValue(
                evt,
                evt.target.name,
                setInputs,
                (evt.target?.value ?? "").replace(/[^-0-9]/gi, "")
            );
            return;
        }

    };


    const updateInputsWithFieldValue = (field: string, value: any) => {
        setInputs((prev) => {
            return {
                ...prev,
                [`${field}`]: value,
            };
        });
    };

    return <>
        <div className={`${props.isCurrentPage ? 'inscriere-page' : 'no-display'}`}>
            <div className="form-hero">
                <div className="radio-wrapper">
                    <SDInputRadioDasauNu
                        name='varsta_peste_18'
                        label={<>Campaniile Promoționale Coca-Cola sunt destinate persoanelor majore. <br/>
                            Te rugăm să confirmi că ai împlinit 18 ani.*
                        </>}
                        inputs={inputs}
                        onChangeValue={(newVal: number) => {
                            updateInputsWithFieldValue('varsta_peste_18', newVal)
                        }}


                    />
                    <br/>
                    <SDInputRadioDasauNu
                        name='acord_regulament'
                        label={<>Sunt de acord cu termenii și condițiile Regulamentului Oficial al Campaniei <br/>
                            și am luat la cunoștință de condițiile de prelucrare a datelor cu caracter personal <br/>
                            conform Regulamentului Oficial al Campaniei.*
                        </>}
                        inputs={inputs}
                        onChangeValue={(newVal: number) => {
                            updateInputsWithFieldValue('acord_regulament', newVal)
                        }}


                    />
                    <SDInputForm name='telefon' type='text' values={inputs} label='Introdu numărul de telefon*'
                                 onChange={onInputChange} maxLen={10}/>
                    <div className='mdt-rules'>Câmpurile marcate cu * sunt obligatorii</div>
                    <div className="ctn-container">
                        <SDButtonStd
                            text='CONTINUĂ'
                            className='black-btn'
                            onClick={()=>{
                                let errors:string[] = []

                                if(inputs['varsta_peste_18'] != 1){
                                    errors.push('Confirmarea varstei de 18 ani este obligatorie')
                                }
                                if(inputs['acord_regulament'] != 1){

                                    errors.push('Acordul Regulamentului Oficial al Campaniei este obligatoriu')
                                }
                                if(!inputs['telefon']){

                                    errors.push('Numărul de telefon este obligatoriu')
                                }
                                if(inputs['telefon'].length > 0 && !inputs['telefon'].match(/^(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2})([0-9]{3}){2}$/)){
                                    errors.push('Numărul de telefon este invalid')
                                }

                                if (errors.length > 0) {
                                    setModal({
                                        title: 'Înscrierea nu este validă',
                                        message: errors.join('\n'),
                                        open: true
                                    })

                                }else{
                                    props.onNext
                                }
                                }}/>
                    </div>

                </div>

            </div>
            <Footer/>
            <SDCustomModal
                isOpen={modal.open}
                onCloseModal={() => {
                    setModal({
                        open: false,
                        title: '',
                        message: ''
                    })
                }
                }
                title={modal.title}
                content={modal.message}/>


        </div>

    </>
}