import React from 'react';
import ReactDOM from 'react-dom';
import Resizer from './resizer';
import './index.css';
import picture from './avocado.jpg';

ReactDOM.render(
  <div>
      <h3>Horizontal resizer:</h3>
      <div className="container">
        <Resizer type="horizontal">
            <img draggable="false" className="picture" alt="avocado" src={picture}/>
        </Resizer>
      </div>
      <h3>Vertical resizer:</h3>
      <div className="container">
          <Resizer type="vertical">
              <img draggable="false" className="picture" alt="avocado" src={picture}/>
          </Resizer>
      </div>
      <h3>Both sides resizer:</h3>
      <div className="container">
          <Resizer type="both">
              <img draggable="false" className="picture" alt="avocado" src={picture}/>
          </Resizer>
      </div>
  </div>,
  document.getElementById('root')
);
