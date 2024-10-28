import { FC } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { IAppModalProps } from "modules/common/interfaces";
import CloseButton from "modules/common/components/CloseButton";
import Arrow from "modules/common/components/Arrow";

import "./appModal.scss";

const AppModal: FC<IAppModalProps> = ({
  isOpen,
  onClose,
  backButtonTo,
  backButtonName,
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {backButtonName && (
            <Link className="modal-back-btn" to={backButtonTo || ""}>
              <Arrow />
              <span className="modal-back-btn-name">{backButtonName}</span>
            </Link>
          )}
          <CloseButton onClick={onClose} />
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default AppModal;
