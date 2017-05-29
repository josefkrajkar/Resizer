import React from 'react';
import ReactDOM from 'react-dom';
import Resizer from './resizer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resizer>Test</Resizer>, div);
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

test('email', () => {
	const mail = 'kapr@ryba.cz';
	expect(mail).toMatch(/@/);
});


