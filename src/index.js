import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Components/Parent.js';
import UseId1 from './Components/UseId1.jsx';
import UseId2 from './Components/UseId2.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <UseId1 />
    <UseId2 />
    <Parent />
    </>
);