import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChatBot from 'react-simple-chatbot';
// ========================================
function tick() {

  const element = (
    <div>
      <h1>React JS App</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>

      <ChatBot
    steps={[
      {
        id: 'name',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}!',
        end: true,
      },
    ]}
  />

    </div>
);



ReactDOM.render(
  element,
  document.getElementById('root'));
}

setInterval(tick, 1000);
