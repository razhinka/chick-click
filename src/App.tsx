import { useEffect, useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import GameLayout from './components/layout/gameLayout/GameLayout';

function App() {
  return (
    <Provider store={store}>
      <GameLayout />
    </Provider>
  );
}


export default App;
