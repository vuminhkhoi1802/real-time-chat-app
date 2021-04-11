import React from 'react';
import moment from 'moment';

import ReactEmoji from 'react-emoji'

import './Message.css';

// const nowTimeDateFormat = () => {
//   return moment().
// };

export const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentUser = false;

  console.log(name);

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{text}</p>
          </div>
          <p className="sentText pl-10">{user}</p>
        </div>
      )
  )
};
