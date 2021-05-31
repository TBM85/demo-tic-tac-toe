import './App.css';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <Game />
      <footer>          
        <p>© Copyright 2021. <strong>"TBM85"</strong><br /> All rights reserved</p> 
      </footer>
    </div>
  );
}

export default App;
