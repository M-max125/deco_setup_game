import { useEffect, useRef } from "react";

export const BubblePreviewModal: React.FC<{
  content: React.ReactElement;
  downloadImagePng: () => void;
}> = (props) => {
  const modalBtnRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const holdModals = document.createDocumentFragment();

  for (let i = 0; i < 15; i++) {
    let div = document.createElement("div");
    div.classList.add("modal-drop");
    div.style.top = Math.floor(Math.random() * 100) + "vh";
    div.style.left = Math.floor(Math.random() * 100) + "vw";
    div.style.transitionDelay = Math.random() + "s";
    div.style.zIndex = "100";
    holdModals.appendChild(div);
  }
  useEffect(() => {
    if (modalContainerRef.current)
      modalContainerRef.current.appendChild(holdModals);
  }, [modalContainerRef]);

  useEffect(() => {
    const mdRef = modalContainerRef.current;
    const btnRef = modalBtnRef.current;

    const triggerDisplayModal = () => {
      mdRef!.style.display = "block";

      window.setTimeout(function () {
        mdRef!.classList.add("active");
      }, 0.1);
    };

    btnRef!.addEventListener("click", triggerDisplayModal);

    return () => {
      btnRef!.removeEventListener("click", triggerDisplayModal);
    };
  }, [modalContainerRef]);

  useEffect(() => {
    const modalContainer = modalContainerRef.current!;
    const triggerCloseModal = () => {
      modalContainer.classList.remove("active");

      window.setTimeout(function () {
        modalContainer.style.display = "none";
      }, 3000);
    };
    closeBtnRef.current!.addEventListener("click", triggerCloseModal);

    return () => {
      closeBtnRef.current!.removeEventListener("click", triggerCloseModal);
    };
  }, [modalContainerRef]);

  return (
    <>
      <div ref={modalBtnRef} className="bubble-trigger">
        {" "}
        <img src="images/image-download.png" alt="icon" />
      </div>
      <div className="modals" ref={modalContainerRef}>
        <div className="modal-content">
          <div className="modal-wrap">
            <button ref={closeBtnRef} className="close">
              Close
            </button>
            {props.content}
            <button className="close" onClick={props.downloadImagePng}>
              Download as PNG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
