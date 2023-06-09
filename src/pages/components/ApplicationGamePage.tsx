import {
  AfisareSelectieDeBaut,
  AfisareSelectieFataDeMasa,
  AfisareSelectieFelPrincipal,
  AfisareSelectieMixDePaste,
  AfisareSelectieNumarDePersoane,
  AfisareSelectiePahare,
  AfisareSelectieSetTacamuri,
  ElementsSelectionStateType,
  SelectedElementProps,
} from "../../app/types";
import React, { useState } from "react";

import { HeaderCategory } from "../app-game-components/HeaderCategory";
import {
  categories,
  de_baut,
  elemente_selectie_de_baut,
  elemente_selectie_fata_de_masa,
  elemente_selectie_fel_principal,
  elemente_selectie_mix_paste,
  elemente_selectie_pahare,
  elemente_selectie_persoane,
  elemente_selectie_set_tacamuri,
  fel_principal,
  fete_de_masa,
  mix_de_paste,
  numar_de_persoane_farfurii,
  pahare,
  tacamuri,
} from "../../app/app_data";
import { SlideElementeSelectie } from "../app-game-components/SlideElementeSelectie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApplicationGamePage: React.FC = (props) => {
  const [elementSelection, setElementSelection] =
    useState<ElementsSelectionStateType>(ElementsSelectionStateType.None);

  /**
   * CHANGE IMAGE CATEGORY SOURCE, IF ACTIVE - GLOW EFFECT
   */
  const [activeTabCategory, setActiveTabCategory] = useState(0);
  const category_img_path = "images/CATEGORII/";
  const onClickSetActiveId = (id: number) => {
    setActiveTabCategory(id);
  };
  const setCategoryImgSource = (id: number, img: string, img_glow: string) => {
    if (id === activeTabCategory) {
      return category_img_path + img_glow;
    } else {
      return category_img_path + img;
    }
  };
  /***
   * CHANGE SELECTED ELEMENT STATE
   */
  const [selectedElement, setSelectedElement] = useState<SelectedElementProps>({
    nr_persoane: 0,
    fata_de_masa: 0,
    fel_principal: 0,
    tacamuri: 0,
    pahare: 0,
    mix_paste: 0,
    de_baut: 0,
  });

  const onClickSetSelectedPersonElement = (id: number) => {
    setSelectedElement({ ...selectedElement, nr_persoane: id });
  };
  const onClickSetSelectedFataDeMasaElement = (id: number) => {
    setSelectedElement({ ...selectedElement, fata_de_masa: id });
  };
  const onClickSetSelectedFelPrincipalElement = (id: number) => {
    setSelectedElement({ ...selectedElement, fel_principal: id });
  };
  const onClickSetSelectedSetTacamuriElement = (id: number) => {
    setSelectedElement({ ...selectedElement, tacamuri: id });
  };
  const onClickSetSelectedPahareElement = (id: number) => {
    setSelectedElement({ ...selectedElement, pahare: id });
  };
  const onClickSetSelectedMixPasteElement = (id: number) => {
    setSelectedElement({ ...selectedElement, mix_paste: id });
  };
  const onClickSetSelectedDeBautElement = (id: number) => {
    setSelectedElement({ ...selectedElement, de_baut: id });
  };
  const setElementImgSource = (
    id: number,
    distinct_element: number,
    img: string,
    img_glow: string
  ) => {
    if (id === distinct_element) {
      return img_glow;
    } else {
      return img;
    }
  };
  /***
   * FATA DE MASA AFISARE MODEL
   */
  const [fataDeMasaPattern, setFataDeMasaPattern] =
    useState<AfisareSelectieFataDeMasa>(AfisareSelectieFataDeMasa.None);
  /***
   * AFISARE MIX DE PASTE
   */
  const [mixDePastePattern, setMixDePastePattern] =
    useState<AfisareSelectieMixDePaste>(AfisareSelectieMixDePaste.None);
  /***
   * AFISARE FARFURII IN FUNCTIE DE NR DE PERSOANE
   */
  const [nrPersoaneFarfurii, setNrPersoaneFarfurii] =
    useState<AfisareSelectieNumarDePersoane>(
      AfisareSelectieNumarDePersoane.None
    );
  /***
   * AFISARE FEL PRINCIPAL IN FUNCTIE DE NR DE PERSOANE
   */
  const [felPrincipalChoice, setFelPrincipalChoice] =
    useState<AfisareSelectieFelPrincipal>(AfisareSelectieFelPrincipal.None);
  /***
   * AFISARE PAHARE IN FUNCTIE DE NR DE PERSOANE
   */
  const [modelPahareChoice, setModelPahareChoice] =
    useState<AfisareSelectiePahare>(AfisareSelectiePahare.None);
  /***
   * AFISARE DE BAUT IN FUNCTIE DE NR DE PERSOANE
   */
  const [deBautChoice, setDeBautChoice] = useState<AfisareSelectieDeBaut>(
    AfisareSelectieDeBaut.None
  );
  /***
   * AFISARE SET TACAMURI IN FUNCTIE DE NR DE PERSOANE
   */
  const [tacamuriChoice, setTacamuriChoice] =
    useState<AfisareSelectieSetTacamuri>(AfisareSelectieSetTacamuri.None);

  const notify = () =>
    toast("🦄 Selectează numărul de persoane!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: { backgroundColor: "#0DD59E" },
    });

  return (
    <div className="application-page">
      {/*HEADER CATEGORIES*/}
      <div className="header-categories">
        <div className="categories">
          <div className="select-elements">
            SELECTEAZĂ categoria <br /> și adaugă elemente
          </div>
          <div className="elements">
            {categories.map((ct, idx) => (
              <HeaderCategory
                key={`category-${idx}`}
                imgSource={setCategoryImgSource(ct.id, ct.img, ct.img_glow)}
                onClick={() => {
                  switch (ct.id) {
                    case 1:
                      setElementSelection(
                        ElementsSelectionStateType.NumarPersoane
                      );
                      break;
                    case 2:
                      setElementSelection(
                        ElementsSelectionStateType.FataDeMasa
                      );
                      break;
                    case 3:
                      setElementSelection(
                        ElementsSelectionStateType.FelPrincipal
                      );
                      break;
                    case 4:
                      setElementSelection(
                        ElementsSelectionStateType.SetTacamuri
                      );
                      break;
                    case 5:
                      setElementSelection(
                        ElementsSelectionStateType.ModelPahare
                      );
                      break;
                    case 6:
                      setElementSelection(ElementsSelectionStateType.MixPaste);
                      break;
                    case 7:
                      setElementSelection(ElementsSelectionStateType.DeBaut);
                  }
                  onClickSetActiveId(ct.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/*HERO SECTION*/}
      <div className="hero">
        {/*ELEMENTS SELECTION SECTION*/}
        <div className="elemente-selectie-container">
          {elementSelection === ElementsSelectionStateType.NumarPersoane
            ? elemente_selectie_persoane.map((p, index) => (
                <SlideElementeSelectie
                  key={`persoane-${index}`}
                  imgSource={setElementImgSource(
                    p.id,
                    selectedElement.nr_persoane,
                    p.img,
                    p.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedPersonElement(p.id);
                    setNrPersoaneFarfurii(p.id);
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.FataDeMasa
            ? elemente_selectie_fata_de_masa.map((f, index) => (
                <SlideElementeSelectie
                  key={`fata-de-masa-${index}`}
                  imgSource={setElementImgSource(
                    f.id,
                    selectedElement.fata_de_masa,
                    f.img,
                    f.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedFataDeMasaElement(f.id);
                    setFataDeMasaPattern(f.id);
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.FelPrincipal
            ? elemente_selectie_fel_principal.map((fl, index) => (
                <SlideElementeSelectie
                  key={`fel-principal-${index}`}
                  imgSource={setElementImgSource(
                    fl.id,
                    selectedElement.fel_principal,
                    fl.img,
                    fl.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedFelPrincipalElement(fl.id);
                    if (nrPersoaneFarfurii >= 1) {
                      setFelPrincipalChoice(fl.id);
                    } else {
                      notify();
                    }
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.SetTacamuri
            ? elemente_selectie_set_tacamuri.map((st, index) => (
                <SlideElementeSelectie
                  key={`set-tacamuri-${index}`}
                  imgSource={setElementImgSource(
                    st.id,
                    selectedElement.tacamuri,
                    st.img,
                    st.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedSetTacamuriElement(st.id);
                    if (nrPersoaneFarfurii >= 1) {
                      setTacamuriChoice(st.id);
                    } else {
                      notify();
                    }
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.ModelPahare
            ? elemente_selectie_pahare.map((ph, index) => (
                <SlideElementeSelectie
                  key={`pahare-${index}`}
                  imgSource={setElementImgSource(
                    ph.id,
                    selectedElement.pahare,
                    ph.img,
                    ph.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedPahareElement(ph.id);
                    if (nrPersoaneFarfurii >= 1) {
                      setModelPahareChoice(ph.id);
                    } else {
                      notify();
                    }
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.MixPaste
            ? elemente_selectie_mix_paste.map((m, index) => (
                <SlideElementeSelectie
                  key={`mix-paste-${index}`}
                  imgSource={setElementImgSource(
                    m.id,
                    selectedElement.mix_paste,
                    m.img,
                    m.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedMixPasteElement(m.id);
                    setMixDePastePattern(m.id);
                  }}
                />
              ))
            : ""}
          {elementSelection === ElementsSelectionStateType.DeBaut
            ? elemente_selectie_de_baut.map((b, index) => (
                <SlideElementeSelectie
                  key={`de-baut-${index}`}
                  imgSource={setElementImgSource(
                    b.id,
                    selectedElement.de_baut,
                    b.img,
                    b.img_glow
                  )}
                  onClick={() => {
                    onClickSetSelectedDeBautElement(b.id);
                    setDeBautChoice(b.id);

                    if (b.id === 3 && nrPersoaneFarfurii < 1) {
                      notify();
                    }
                  }}
                />
              ))
            : ""}
        </div>
        {/*TABLE SETUP SELECTION SECTION*/}
        <div className="tbl-setup-container">
          {fataDeMasaPattern >= 1 ? (
            <img
              src={fete_de_masa[fataDeMasaPattern - 1]}
              alt="model-fete-de-masa"
              className="fdm-pattern"
            />
          ) : (
            ""
          )}
          {mixDePastePattern >= 1 ? (
            <img
              src={mix_de_paste[mixDePastePattern - 1]}
              alt="pattern-mix-paste"
              className="mdp-pattern"
            />
          ) : (
            ""
          )}
          {nrPersoaneFarfurii >= 1 ? (
            <img
              src={numar_de_persoane_farfurii[nrPersoaneFarfurii - 1]}
              alt="farfurii"
              className="npf-pattern"
            />
          ) : (
            ""
          )}
          {felPrincipalChoice >= 1 ? (
            <img
              src={
                fel_principal[felPrincipalChoice - 1][nrPersoaneFarfurii - 1]
              }
              alt="fel-principal"
              className="fpc-pattern"
            />
          ) : (
            ""
          )}
          {modelPahareChoice >= 1 ? (
            <img
              src={pahare[modelPahareChoice - 1][nrPersoaneFarfurii - 1]}
              alt="model-pahare"
              className="mpc-pattern"
            />
          ) : (
            ""
          )}
          {deBautChoice >= 1 ? (
            deBautChoice !== 3 ? (
              <img
                src={de_baut[deBautChoice - 1][0]}
                alt="de_baut"
                className="db-pattern"
              />
            ) : deBautChoice === 3 && nrPersoaneFarfurii >= 1 ? (
              <img
                src={de_baut[deBautChoice - 1][nrPersoaneFarfurii - 1]}
                alt="de_baut"
                className="db-pattern"
              />
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {tacamuriChoice >= 1 && tacamuriChoice != 5 ? (
            <img
              src={tacamuri[tacamuriChoice - 1][nrPersoaneFarfurii - 1]}
              alt="set-tacamuri"
              className="st-pattern"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
