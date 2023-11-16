import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hero from './Components/Hero';
import image from './Components/img/todo.jpg';
function App() {
  const heroData = {
    image: './Components/img/todo.jpg',
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