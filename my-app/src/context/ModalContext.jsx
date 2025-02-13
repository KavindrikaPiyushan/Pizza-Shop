// ModalContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context for the modal
const ModalContext = createContext();

// ModalProvider component that will wrap your app
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  // Function to open the modal
  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, selectedPizza }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  return useContext(ModalContext);
};
