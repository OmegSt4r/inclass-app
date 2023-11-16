import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import imageSrc from './Components/Assets/todo.jpg';
function App() {
  const heroData = {
    imageSrc: './Components/Assets/todo.jpg',
    heading: 'Hello World',
    subHeading: 'Welcome to my app by using props',
    buttonText: 'Learn More',
  };

  return (
    <div className="app">
      <Hero data={heroData} />
      
    </div>
  );
}
export default App;