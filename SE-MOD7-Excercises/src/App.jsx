import React from 'react';
import EmojiChanger from './EmojiChanger';
import { EmojiProvider } from './context/EmojiContext';
import BitcoinRates from './BitCoinRates';
import './App.css'
import { UserProvider } from './context/UserContext';
import AppRoutes from './routes/AppRoutes';
import NavBar from './NavBar';
import MyThemeProvider from './context/MyThemeContext';


function App() {

  return (
    <>
    <UserProvider>
      <EmojiProvider>
        <EmojiChanger/>
        <BitcoinRates/>
      </EmojiProvider>
    </UserProvider>
    </>
  )
}
// Check where Mythemecontext is 
export default App
