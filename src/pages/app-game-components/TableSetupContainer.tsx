import {
  de_baut,
  fel_principal,
  fete_de_masa,
  mix_de_paste,
  numar_de_persoane_farfurii,
  pahare,
  tacamuri,
} from "../../app/app_data";
import {
  AfisareSelectieFataDeMasa,
  AfisareSelectieFelPrincipal,
  AfisareSelectieMixDePaste,
  AfisareSelectieNumarDePersoane,
  AfisareSelectiePahare,
  AfisareSelectieDeBaut,
  AfisareSelectieSetTacamuri,
} from "../../app/types";

export const TableSetupContainer: React.FC<{
  fataDeMasaPattern: AfisareSelectieFataDeMasa;
  mixDePastePattern: AfisareSelectieMixDePaste;
  nrPersoaneFarfurii: AfisareSelectieNumarDePersoane;
  felPrincipalChoice: AfisareSelectieFelPrincipal;
  modelPahareChoice: AfisareSelectiePahare;
  deBautChoice: AfisareSelectieDeBaut;
  tacamuriChoice: AfisareSelectieSetTacamuri;
  previewModal: boolean;
}> = ({
  fataDeMasaPattern,
  mixDePastePattern,
  nrPersoaneFarfurii,
  felPrincipalChoice,
  modelPahareChoice,
  deBautChoice,
  tacamuriChoice,
  previewModal,
}) => {
  return (
    <>
      <div
        className={`tbl-setup-container ${previewModal ? "tbl-mb-bottom" : ""}`}
      >
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
            src={fel_principal[felPrincipalChoice - 1][nrPersoaneFarfurii - 1]}
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
    </>
  );
};
