import { useState, useEffect } from "react";
import { useUserContext } from "./context/UserContext";
import { useEmojiContext } from "./context/EmojiContext";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD']; // Array of currencies

// Below is the main functional component:
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]); // used to track the currently selected currency
    const [bitcoinPrice, setBitcoinPrice] = useState(null); // // used to store the Bitcoin price for the selected currency. 
    const {currentUser, handleUpdateUser } = useUserContext(); // useUserContext is a hook that is used to update the user from the EmojiContext
    const { currentEmoji } = useEmojiContext();

    useEffect(() => { // useEffect hook to fetch Bitcoin rates when the component mounts or when the selected currency changes.
        const apiUrl = 'https://blockchain.info/ticker';
        const controllerRef = { current: new AbortController() }; // Ref to keep the controller instance
    
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, { signal: controllerRef.current.signal });
                const data = await response.json();
    
                // Check if the currency is present in the response
                const currencyData = data[currency];
    
                if (currencyData !== undefined) {
                    const price = currencyData.last;
                    setBitcoinPrice(price);
                } else {
                    console.error(`No data for currency ${currency}`);
                }
            } catch (error) {
                console.error('Error fetching Bitcoin price:', error);
            }
        };
    
        fetchData();
    
        return () => {
            // Cleanup logic: abort ongoing fetch request if it exists
            controllerRef.current.abort();
        };
    
    }, [currency]);

    const options = currencies.map(curr => ( // provides user with dropdown options for the different currencies. Maps over currencies array to create option elements for dropdown.
        <option value={curr} key={curr}> 
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <h4>{currentUser.email}</h4> 
            <h4>{currentUser.userName}</h4>
            <h5>Current Emoji: {currentEmoji}</h5> 
            <label>
                Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
    
            </label>

            {bitcoinPrice !== null ? (
                <p>
                    Current Bitcoin Price in {currency}: {bitcoinPrice}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BitcoinRates;
