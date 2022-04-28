import React from 'react';
import {HomeComponentsProps} from "../../app/types";
import {Footer} from "../common/Footer";
import {SDButtonStd} from "../common/SdButtonStd";


export const DescriptionPage: React.FC<HomeComponentsProps> = (props)=>{
    return <>
        <div className={`${props.isCurrentPage ? 'description-page' : 'hidden'}`}>
            <div className="desc-hero">
                <div className="dp-instructions">
                    <span>Decorează masa de Paște</span> plasând cu mișcările mâinilor,<br className='mobhide'/>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='mobhide'/>
                    incididunt ut labore et dolore magna aliqua. <span>Alege fiecare element</span> enim ad minim veniam, quis nostrud <br className='mobhide'/>
                    exercitation fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt câștigă. <br className='mobhide'/>
                    Decorează masa de Paște plasând cu mișcările mâinilor, <br className='mobhide'/>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='mobhide'/>
                    incididunt ut labore et dolore magna aliqua. Alege fiecare element enim ad <br className='mobhide'/>
                    exercitation fugiat nulla pariatur. Excepteur sint occaecat cupidatat <br className='mobhide'/>
                    Decorează masa de Paște <span>plasând cu mișcările mâinilor</span>, <br className='mobhide'/>
                    onsectetur adipiscing elit, sed do eiusmod tempor <br className='mobhide'/>
                    Alege fiecare element enim ad minim veniam, quis nostrud <br className='mobhide'/>
                    exercitation fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt câștigă. <br/>
                </div>
               <div className="premii-display">
                   <div className="display-p">
                       <div className="d-img">
                           <img src="images/geantaGlow.png" alt="geanta glow"/>
                       </div>
                       <div className="d-text">
                           Geantă <br className='mobhide'/>termo <br className='mobhide'/>pliabilă
                       </div>
                   </div>
                   <div className="display-p">
                       <div className="d-img">
                           <img src="images/setTacamuriGlow.png" alt="tacamuri glow"/>
                       </div>
                       <div className="d-text">
                           Set de  <br className='mobhide'/>tacâmuri <br className='mobhide'/> de bambus
                       </div>
                   </div>
                   <div className="display-p">
                       <div className="d-img">
                           <img src="images/canaTermicaGlow.png" alt="cana termica glow"/>
                       </div>
                       <div className="d-text">
                           Cană <br className='mobhide'/>termică
                       </div>
                   </div>
               </div>
                <div className="btn-container">
                    <SDButtonStd text='APASĂ AICI' className='black-btn' onClick={props.onNext}/>
                </div>
            </div>
            <Footer/>
        </div>

    </>
}