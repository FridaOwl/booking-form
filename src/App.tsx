import React from 'react';
import './App.css';
import BookingForm from './components/BookingForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Добро пожаловать!</h1>
        <BookingForm />
      </header>
    </div>
  );
};

export default App;
