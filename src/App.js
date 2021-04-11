import React from "react";
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import ContactUserCard from './Components/ContactUserCard';
import './App.css'


import "./index.css";

const App = () => {
  return (
  <>
      <p>Hello, world!</p>
      <NavBar />
      <UserProfile />
      <Posts />
      <ContactUserCard />
  </>
  );
}

export default App;
