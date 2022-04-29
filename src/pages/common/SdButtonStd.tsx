import React from "react";




type SDButtonStdProps = {
    text: string | JSX.Element,
    onClick?: (e:any) => void,
    className: string,
    loading?: boolean,
    disabled?: boolean
}

export const SDButtonStd: React.FC<SDButtonStdProps> = (props) => {


    return <>
        <button
                onClick={props.onClick}
                className={`${props.className ?? ''} `}
                disabled={props.disabled}
            >
                {props.text}
        </button>

    </>

}
