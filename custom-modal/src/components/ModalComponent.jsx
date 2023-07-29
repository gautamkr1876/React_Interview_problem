import { useEffect } from "react";

const ModalComponent = ({ isModalOpen, setModal, header, content }) => {
  const closeModal = (e) => {
    console.log("event.target", e.target);
    console.log("event.currentTarget", e.currentTarget);
    setModal(false);
  };
  const keydownHandler = (e) => {
    const {key} = e
    if (key === "Escape") {
      closeModal(e);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);

  if (!isModalOpen) return null;
  else {
    return (
      <div className="modal-backdrop" onClick={closeModal}>
        <div
          className="modal-content"
          onClick={(e) => {
            console.log("event.target-modal-content", e.target);
            console.log("event.currentTarget-modal-content", e.currentTarget);
            e.stopPropagation();
          }}
        >
          <div
            className="modal-header"
            onClick={(e) => {
              console.log("event.target-modal-header", e.target);
              console.log("event.currentTarget-modal-header", e.currentTarget);
            }}
          >
            <span>{header}</span>
            <span className="close-icon" onClick={closeModal}>
              X
            </span>
          </div>
          <div
            className="modal-body"
            onClick={(e) => {
              console.log("event.target-modal-body", e.target);
              console.log("event.currentTarget-modal-body", e.currentTarget);
            }}
          >
            {content}
          </div>
          <div
            className="modal-footer"
            onClick={(e) => {
              console.log("event.target-modal-footer", e.target);
              console.log("event.currentTarget-modal-footer", e.currentTarget);
            }}
          >
            <button onClick={closeModal}>Cancle</button>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      </div>
    );
  }
};
export default ModalComponent;
