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
import React, { useCallback, useRef, useState } from "react";
import { HeaderCategory } from "../app-game-components/HeaderCategory";
import { categories } from "../../app/app_data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ElementeSelectieContainer } from "../app-game-components/ElementeSelectieContainer";
import { TableSetupContainer } from "../app-game-components/TableSetupContainer";
import { BubblePreviewModal } from "../app-game-components/BubblePreviewModal";
import * as htmlToImage from "html-to-image";

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

  const refHero = useRef<HTMLDivElement>(null);

  const downloadImagePng = useCallback(() => {
    if (refHero.current === null) {
      return;
    }

    htmlToImage
      .toPng(refHero.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "deco-game-image.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refHero]);

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

        <ElementeSelectieContainer
          elementSelection={elementSelection}
          setElementImgSource={setElementImgSource}
          selectedElement={selectedElement}
          onClickSetSelectedPersonElement={onClickSetSelectedPersonElement}
          setNrPersoaneFarfurii={setNrPersoaneFarfurii}
          onClickSetSelectedFataDeMasaElement={
            onClickSetSelectedFataDeMasaElement
          }
          setFataDeMasaPattern={setFataDeMasaPattern}
          onClickSetSelectedFelPrincipalElement={
            onClickSetSelectedFelPrincipalElement
          }
          setFelPrincipalChoice={setFelPrincipalChoice}
          notify={notify}
          nrPersoaneFarfurii={nrPersoaneFarfurii}
          onClickSetSelectedSetTacamuriElement={
            onClickSetSelectedSetTacamuriElement
          }
          setTacamuriChoice={setTacamuriChoice}
          onClickSetSelectedPahareElement={onClickSetSelectedPahareElement}
          setModelPahareChoice={setModelPahareChoice}
          onClickSetSelectedMixPasteElement={onClickSetSelectedMixPasteElement}
          setMixDePastePattern={setMixDePastePattern}
          onClickSetSelectedDeBautElement={onClickSetSelectedDeBautElement}
          setDeBautChoice={setDeBautChoice}
        />
        {/*TABLE SETUP SELECTION SECTION*/}
        <TableSetupContainer
          fataDeMasaPattern={fataDeMasaPattern}
          mixDePastePattern={mixDePastePattern}
          nrPersoaneFarfurii={nrPersoaneFarfurii}
          felPrincipalChoice={felPrincipalChoice}
          modelPahareChoice={modelPahareChoice}
          deBautChoice={deBautChoice}
          tacamuriChoice={tacamuriChoice}
          previewModal={false}
        />
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
      <BubblePreviewModal
        content={
          <div className="hero" ref={refHero}>
            <TableSetupContainer
              previewModal={true}
              fataDeMasaPattern={fataDeMasaPattern}
              mixDePastePattern={mixDePastePattern}
              nrPersoaneFarfurii={nrPersoaneFarfurii}
              felPrincipalChoice={felPrincipalChoice}
              modelPahareChoice={modelPahareChoice}
              deBautChoice={deBautChoice}
              tacamuriChoice={tacamuriChoice}
            />
          </div>
        }
        downloadImagePng={downloadImagePng}
      />
    </div>
  );
};
