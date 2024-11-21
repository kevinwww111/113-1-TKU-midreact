import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
