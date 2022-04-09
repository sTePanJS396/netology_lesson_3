import React from 'react'
import './App.css';
import Stars from './components/Stars';
import propTypes from 'prop-types';

function App() {
  const [starNumber, setStarNumber] = React.useState(0);
  // Сделал через "React.useState" потому, что, когда, допустим, с сервера придет новое количество звезд, то компонент перерисуется.
  // Можно через стейт и не делать, но это, так сказать, забегая наперед (для удобства).
  return (
    <div className="app">
      <div className="film-card">
        <div className="film-card-title"><h1>Название</h1></div>
        <div className="film-card-rating">
          {starNumber < 0 || starNumber > 5 ? null : <Stars star={starNumber}/>}
        </div>
        <div className="film-card-button">
          <button onClick={() => alert('Фильм добавлен!')}>Добавить</button>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  starNumber: propTypes.number,
  setStarNumber: propTypes.func
}
// Добавляю "propTypes" просто, на всякий случай.

export default App;