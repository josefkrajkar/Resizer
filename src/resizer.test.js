import React from 'react';
import ReactDOM from 'react-dom';
import Resizer from './resizer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resizer>Test</Resizer>, div);
});


