import React from 'react';
import axios from 'axios';

import ScrollToBottom from 'react-scroll-to-bottom'

import { Message } from './Message/Message'

import './Messages.css';

export const Messages = ({ messages, name }) => {

  console.log(messages);
  return (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
)};
