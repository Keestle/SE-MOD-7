import React from "react";
import { useContext,useState } from "react";

const EmojiContext = React.createContext();

const EmojiProvider = (props) => { // Serves as a provider for the EmojiContext
    const [currentEmoji, setCurrentEmoji] = useState('happy'); // useState hook used to create a state variable 'currentEmoji' and initiallised with value happy. 

    const handleUpdateEmoji = (Emoji) => { // function created that takes an Emoji parameter and setsCurrentEmoji to provided Emoji. 
        setCurrentEmoji(Emoji);
    }

    return ( // This component renders the below which provides the context value as an object containing 'currentEmoji' and 'handleEmoji' to its children. 
        <EmojiContext.Provider value={{currentEmoji,handleUpdateEmoji}}>
            {props.children} 
        </EmojiContext.Provider>// children represents the child components that are wrapped by this provider.
    )
}

//This is a custom Hook 
const useEmojiContext = () => {
    return useContext(EmojiContext);
}
export {EmojiProvider, useEmojiContext};