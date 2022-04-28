import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';
import React from "react";



export const SDCustomModal: React.FC<{
    isOpen: boolean
    onCloseModal: () => void
    title: string
    content: JSX.Element | string
}> = (props) => {


    return <>


        <Modal open={props.isOpen} onClose={props.onCloseModal} center blockScroll={true}
               classNames={{
                   overlay: 'customOverlay',
                   modal: 'customModal',
               }}

        >
            <h2 style={{textAlign: 'center',paddingBottom:'1rem'}}>{props.title}</h2>
            <div className="content_modal_wrapper">
                {props.content}
            </div>

        </Modal>

    </>
}

