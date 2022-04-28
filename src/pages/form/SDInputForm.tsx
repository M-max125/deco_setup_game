import React from "react";

export const SDInputForm:React.FC<{
    name :string;
    type :string;
    values: { [key: string]: any };
    label? : string;
    placeholder?: string;
    className?: string;
    divWrapper?: boolean;
    onChange?: (event: React.ChangeEvent<any>) => void;
    errors?: string;
    onFieldBlur?: (event: React.FocusEvent<any>) => void;
    maxLen?: number;
    onClick?: (event: React.MouseEvent<any>) => void;


}> = (props)=>{
    let inputSDB = (
        <>
            <input
                className="inputfield"
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.values[props.name] ?? ""}
                onBlur={props.onFieldBlur}
                maxLength={props.maxLen}
                onClick={props.onClick}


            />
        </>
    );
    let inputContainerSDB = (
        <>
            <div className="std-wrapp-input">
                <label>{props.label}</label>
                {inputSDB}
                {props.errors ? (
                    <div className="form-errors">{props.errors}</div>
                ) : (
                    ""
                )}

            </div>
        </>
    );
    return <>
        {inputContainerSDB}
    </>
}