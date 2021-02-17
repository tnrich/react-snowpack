import ReactDOM from "react-dom";
import React from "react";
import shortid from "shortid";
// import withDialog from "./enhancers/withDialog";
import { Dialog } from "@blueprintjs/core";

//this is only really useful for unconnected standalone simple dialogs
//remember to pass usePortal={false} to the <Dialog/> component so it will close properly
export default function showDialogOnDocBody(DialogComp, options = {}) {
  const dialogHolder = document.createElement("div");
  const className = "myDialog" + shortid();
  dialogHolder.className = className;
  document.body.appendChild(dialogHolder);
  const onClose = () => {
    document.querySelector("." + className).remove();
  };
  let DialogCompToUse;
  if (options.addDialogContainer) {
    DialogCompToUse = props => {
      return (
        <Dialog
          usePortal={false}
          title={"pass a {title} prop"}
          isOpen
          {...props}
        >
          <DialogComp
            {...props}
            hideModal={onClose}
            onClose={onClose}
          ></DialogComp>
        </Dialog>
      );
    };
  } else {
    DialogCompToUse = DialogComp;
  }
  ReactDOM.render(
    <DialogCompToUse hideModal={onClose} onClose={onClose} {...options} />,
    dialogHolder
  );
}
