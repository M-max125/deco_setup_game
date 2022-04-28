import React from "react";

export const SDInputHandleControlChange = (
    inputName: string,
    setInputs: React.Dispatch<React.SetStateAction<any>>,
    withValue: any,
): void => {
    return SDInputHandleControlChangeEventWithNameValue(undefined, inputName, setInputs, withValue)
};

export const SDInputHandleControlChangeEvent = (e: any,
                                                setInputs: React.Dispatch<React.SetStateAction<any>>): void => {
    SDInputHandleControlChangeEventWithNameValue(e, e.target.name, setInputs)
}


export const SDInputHandleControlChangeEventWithNameValue = (
    e: any,
    inputName: string,
    setInputs: React.Dispatch<React.SetStateAction<any>>,
    withValue?: any): void => {

    // console.log("SDFormInputHandleControlChange: "+inputName + ";"+e.target?.value)
    // console.log(withValue)

    if (typeof (setInputs) != 'function') return;

    if (e && e !== undefined && e.hasOwnProperty("stopPropagation")) e.stopPropagation();

    if (e && e.target && e.target.type && e.target.type === 'checkbox') {
        setInputs((prevState: any) => {
            return {
                ...prevState,
                [inputName]: '1',
            }
        })
    }

    if (e && e.target && e.target.type && e.target.type === 'file') {
        if (e.target.files && e.target.files.length > 0) {
            setInputs((prevState: any) => {
                return {
                    ...prevState,
                    [inputName]: e.target.files[0],
                }
            })
        } else {
            setInputs((prevState: any) => {
                return {
                    ...prevState,
                    [inputName]: null,
                }
            })
        }
        return;
    }
    if (withValue !== undefined) {
        setInputs((prevState: any) => {
            return {
                ...prevState,
                [inputName]: withValue,
            }
        })
    } else {
        if (e !== undefined) {
            setInputs((prevState: any) => {
                return {
                    ...prevState,
                    [inputName]: e.target.value,
                }
            })
        }

    }
    //e.target.value


};
