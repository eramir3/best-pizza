import React, { useState } from "react";

const ModalContext = React.createContext<any>({
  open: () => { },
  close: () => { }
});

export const ModalContextProvider = (props: any) => {

  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState(false);
  const [image, setImage] = useState(false);

  const contextValue = {
    openModal: openModal,
    setOpenModal: setOpenModal,
    setTitle: setTitle,
    setImage: setImage,
    title: title,
    image: image
  }

  return <ModalContext.Provider value={contextValue}>{props.children}</ModalContext.Provider>
}

export default ModalContext;