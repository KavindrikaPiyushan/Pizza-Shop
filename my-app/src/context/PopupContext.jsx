import React,{createContext,useContext,useState} from "react";

const PopupContext = createContext();



export const PopupContextProvider = ({children})=>{
    
    const [isPopupOpen,setIsPopupOpen] = useState(false);

    const [isModalOpen,setIsModalOpen] = useState(false);

    const [selectedPizza,setSelectedPizza] = useState(null);

    const [quantity,setQuantity] = useState(1);
    const [cart, setCart] = useState([]);



    const openPopup = ()=>{
        setIsPopupOpen(true);

    }
    const closePopup = ()=>{
        setIsPopupOpen(false);
    }

    return (
        <PopupContext.Provider value={{isPopupOpen,openPopup,closePopup,isModalOpen,setIsModalOpen,selectedPizza,setSelectedPizza,quantity,setQuantity,cart, setCart}}>
            {children}
        </PopupContext.Provider>
    )

}

export const usePop =()=>useContext(PopupContext);