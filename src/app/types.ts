import React from "react";

export enum HomeComponents{
    isLandingPage,
    isDescriptionPage,
    isFormPage,
    isApplicationPage
}
export type HomeComponentsProps = {
    onNext : React.Dispatch<React.SetStateAction<any>>,
    isCurrentPage: boolean
}

export type HeaderCategoryProps = {
    id:number,
    img : string,
    img_glow : string
}

export type SelectedElementProps = {
    nr_persoane : number,
    fata_de_masa : number,
    fel_principal : number,
    tacamuri  :number,
    pahare : number,
    mix_paste :number,
    de_baut : number

}

export enum ElementsSelectionStateType{
    None,
    NumarPersoane,
    FataDeMasa,
    FelPrincipal,
    SetTacamuri,
    ModelPahare,
    MixPaste,
    DeBaut
}

export enum AfisareSelectieFataDeMasa{
    None,
    Pattern1,
    Pattern2,
    Pattern3,
    Pattern4,
    Pattern5
}
export enum AfisareSelectieMixDePaste{
    None,
    Pattern1,
    Pattern2,
    Pattern3,
    Pattern4,
    Pattern5
}
export enum AfisareSelectieNumarDePersoane{
    None ,
    Person1,
    Person2,
    Person3,
    Person4,
    Person5
}

export enum AfisareSelectieFelPrincipal{
    None,
    CartofiCarnita,
    Cubulete,
    MamaligaCuSarmale,
    Pizza,
    Supa
}

export enum AfisareSelectiePahare{
    None,
    Pattern1,
    Pattern2,
    Pattern3,
    Pattern4,
    Pattern5
}

export enum AfisareSelectieDeBaut{
    None,
    Pattern1,
    Pattern2,
    Pattern3,
    Pattern4,
    Pattern5
}

export enum AfisareSelectieSetTacamuri{
    None,
    Pattern1,
    Pattern2,
    Pattern3,
    Pattern4,
    Pattern5
}

