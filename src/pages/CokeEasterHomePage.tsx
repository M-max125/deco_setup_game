import React, {useState} from 'react';
import {LandingPage} from "./components/LandingPage";
import {HomeComponents} from "../app/types";
import {DescriptionPage} from "./components/DescriptionPage";
import {InscrierePage} from "./components/InscrierePage";
import {ApplicationGamePage} from "./components/ApplicationGamePage";


export const CokeEasterHomePage: React.FC = () => {

    const [page, setPage] = useState<HomeComponents>(HomeComponents.isLandingPage)

    return <>
        <LandingPage isCurrentPage={page === HomeComponents.isLandingPage} onNext={() => {
            setPage(HomeComponents.isDescriptionPage)

        }}/>
        <DescriptionPage isCurrentPage={page === HomeComponents.isDescriptionPage}
                         onNext={() => setPage(HomeComponents.isFormPage)}/>
        <InscrierePage isCurrentPage={page === HomeComponents.isFormPage}
                       onNext={() => setPage(HomeComponents.isApplicationPage)}/>
        <ApplicationGamePage isCurrentPage={page === HomeComponents.isApplicationPage} onNext={()=>console.log('hello')}/>
    </>
}