import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const news = ['C++', 'Python', 'C#', 'JS', 'React'];

const profiles = [
    { link: '1', author: 'Рей' },
    { link: '2', author: 'Шион' },
    { link: '3', author: 'Йорк' },
    { link: '4', author: 'Коля' },
    { link: '5', author: 'Влад' }
]

const messages1 = [{ text: 'Hello', likes: '12' },
{ text: 'Hi', likes: '3' },
{ text: 'How are you', likes: '83' },
{ text: 'Fine, thanks', likes: '5' }]

const messages2 = [{ text: 'I love you', likes: '4' },
{ text: 'Love you to', likes: '1' },
{ text: 'I want to stay in your house', likes: '2' },
{ text: 'Ok', likes: '3' }]


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App profiles = {profiles} messages = {messages1} news = {news}/>
);

