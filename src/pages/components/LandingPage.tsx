import React from 'react';
import {SDButtonStd} from "../common/SdButtonStd";
import {HomeComponentsProps} from "../../app/types";


export const LandingPage: React.FC<HomeComponentsProps> = (props) => {

    return <>
        <div className={`${props.isCurrentPage ? 'landing-page' : 'hide'}`}>
            <div className="bg-hero-top">
                <img src="images/hero1.jpg" alt="coca cola family"/>
                <div className="registered">
                    ©2022 The Coca-Cola Company. Toate drepturile rezervate. COCA-COLA, <br/>
                    COCA-COLA ZERO și STICLA CONTUR sunt mărci înregistrate ale The Coca-Cola Company.
                </div>
            </div>
            <div className="bottom-wrapper">
                <div className="left-side-container">
                    <div className="left-area-divider">
                        {/* STEPS */}
                        <div className="description-icons-area">
                            <div className="icon-box">
                                <div className="image">
                                    <img src="images/icon1.png" alt="location"/>
                                </div>
                                <div className="text first">VINO AICI</div>
                            </div>
                            <div className="icon-box">
                                <div className="image">
                                    <img src="images/icon2.png" alt="meal"/>
                                </div>
                                <div className="text">
                                    PREGĂTEȘTE MASA <br/>de sărbători <br/>pentru cei dragi
                                </div>
                            </div>
                            <div className="icon-box">
                                <div className="image">
                                    <img src="images/icon3.png" alt="premiu"/>
                                </div>
                                <div className="text">
                                    POȚI CÂȘTIGA <br/>pe loc la <br/> <span>Automatul de Premii*</span>
                                </div>

                            </div>
                            <div className="icon-disclaimer">
                                <span className='disclaimer-location'>*amplasat în zona Relații Clienți</span><br/>
                                Nu uita <span>să cumperi</span> minim o <span>Coca-Cola</span> și
                                <span> să <br className='mobhide'/>păstrezi bonul fiscal</span> pentru a primi premiul.

                            </div>
                        </div>
                        {/* PREMII */}
                        <div className="premii-btn-area">
                            <div className="premiuContainer">
                                <div className="p-box">
                                    <div className="img-premiu">
                                        <img src="images/geanta.png" alt="geanta"/>
                                    </div>
                                    <div className="p-text gp">
                                        Geantă <br className='mobhide'/>termo <br className='mobhide'/>pliabilă
                                    </div>
                                </div>
                                <div className="p-box">
                                    <div className="img-premiu">
                                        <img src="images/set-tacamuri-bambus.png" alt="set-tacamuri-bambus"/>
                                    </div>
                                    <div className="p-text">
                                        Set de  <br className='mobhide'/>tacâmuri <br className='mobhide'/> de bambus
                                    </div>
                                </div>
                                <div className="p-box">
                                    <div className="img-premiu">
                                        <img src="images/cana-termica.png" alt="cana-termica"/>
                                    </div>
                                    <div className="p-text ct">
                                        Cană <br className='mobhide'/>termică
                                    </div>
                                </div>


                            </div>
                            {/* BUTTON */}
                            <SDButtonStd text='APASĂ AICI' className='black-btn' onClick={props.onNext}/>
                        </div>
                    </div>
                    {/* FOOTER DISCLAIMER */}
                    <div className="footer-disclaimer-cmp">
                        Încearcă experiența virtuală și poți câștiga premii: o geantă termică, un set de tacâmuri de
                        bambus
                        sau o cană termică. Perioada campaniei 14 Aprilie - 27 Aprilie 2022, în limita stocului
                        disponibil.
                        Numărul total de premii este 1.124 cu valoarea totală estimată de 12.822,50 lei, TVA inclus.
                        Detalii și regulament pe CokeScan.ro/carrefour. Imaginile sunt cu titlu de prezentare.
                        Campanie valabilă doar în Carrefour Timișoara.

                    </div>

                </div>
                <div className="right-side-container">
                    <div className="logo-container">
                        <img src="images/coca-cola-logo.png" alt="coca cola logo"/>
                    </div>
                </div>
            </div>
        </div>

    </>
}