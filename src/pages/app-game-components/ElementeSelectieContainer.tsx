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
import {
  elemente_selectie_de_baut,
  elemente_selectie_fata_de_masa,
  elemente_selectie_fel_principal,
  elemente_selectie_mix_paste,
  elemente_selectie_pahare,
  elemente_selectie_persoane,
  elemente_selectie_set_tacamuri,
} from "../../app/app_data";
import { SlideElementeSelectie } from "./SlideElementeSelectie";
import { Id } from "react-toastify";

type ElementeSelectieContainerProps = {
  elementSelection: ElementsSelectionStateType;
  setElementImgSource: (
    id: number,
    distinct_element: number,
    img: string,
    img_glow: string
  ) => string;
  selectedElement: SelectedElementProps;
  onClickSetSelectedPersonElement: (id: number) => void;
  setNrPersoaneFarfurii: React.Dispatch<
    React.SetStateAction<AfisareSelectieNumarDePersoane>
  >;
  onClickSetSelectedFataDeMasaElement: (id: number) => void;
  setFataDeMasaPattern: React.Dispatch<
    React.SetStateAction<AfisareSelectieFataDeMasa>
  >;
  onClickSetSelectedFelPrincipalElement: (id: number) => void;
  setFelPrincipalChoice: React.Dispatch<
    React.SetStateAction<AfisareSelectieFelPrincipal>
  >;
  nrPersoaneFarfurii: AfisareSelectieNumarDePersoane;
  notify: () => Id;
  onClickSetSelectedSetTacamuriElement: (id: number) => void;
  setTacamuriChoice: React.Dispatch<
    React.SetStateAction<AfisareSelectieSetTacamuri>
  >;
  onClickSetSelectedPahareElement: (id: number) => void;
  setModelPahareChoice: React.Dispatch<
    React.SetStateAction<AfisareSelectiePahare>
  >;
  onClickSetSelectedMixPasteElement: (id: number) => void;
  setMixDePastePattern: React.Dispatch<
    React.SetStateAction<AfisareSelectieMixDePaste>
  >;
  onClickSetSelectedDeBautElement: (id: number) => void;
  setDeBautChoice: React.Dispatch<React.SetStateAction<AfisareSelectieDeBaut>>;
};

export const ElementeSelectieContainer: React.FC<
  ElementeSelectieContainerProps
> = ({
  elementSelection,
  setElementImgSource,
  selectedElement,
  onClickSetSelectedPersonElement,
  setNrPersoaneFarfurii,
  onClickSetSelectedFataDeMasaElement,
  setFataDeMasaPattern,
  onClickSetSelectedFelPrincipalElement,
  setFelPrincipalChoice,
  nrPersoaneFarfurii,
  notify,
  onClickSetSelectedSetTacamuriElement,
  setTacamuriChoice,
  onClickSetSelectedPahareElement,
  setModelPahareChoice,
  onClickSetSelectedMixPasteElement,
  setMixDePastePattern,
  onClickSetSelectedDeBautElement,
  setDeBautChoice,
}) => {
  return (
    <>
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
    </>
  );
};
