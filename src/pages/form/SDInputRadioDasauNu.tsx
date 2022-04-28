import React from "react";

export const SDInputRadioDasauNu: React.FC<{
    name: string;
    label: JSX.Element;
    inputs: { [key: string]: any }
    onChangeValue: (value: number) => void
    errors?: string;

}> = (props) => {
    const isCheckedFor = (value: number) => {
        return (props.inputs[props.name] ?? -1) === value
    }
    let inputDa = <>
        <div
            onClick={(evt) => {
                props.onChangeValue(1)
            }
            }
            className={`my-radio ${isCheckedFor(1) ? 'checked' : ''}`}
        >{isCheckedFor(1) && <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={`#fff`}>
            <circle cx="50" cy="50" r="50"/>
        </svg>
        }</div>
    </>

    let inputNu = <>
        <div
            onClick={(evt) => {
                props.onChangeValue(0)
            }
            }
            className={`my-radio ${isCheckedFor(0) ? 'checked' : ''}`}
        >{isCheckedFor(0) && <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={`#fff`}>
            <circle cx="50" cy="50" r="50"/>
        </svg>

        }</div>
    </>

    let labelAndInput = <>
        <div className='radio-group'>
            <div className='radio-label'>{props.label}</div>
            <div className='radio-options'>
                {inputDa}<label onClick={(evt) => {
                props.onChangeValue(1)
            }
            }>Da</label>
                {inputNu}<label onClick={(evt) => {
                props.onChangeValue(0)
            }
            }
            >Nu</label>
            </div>
            <div className="radio-errors">{props.errors}</div>
        </div>


    </>

    return labelAndInput
}