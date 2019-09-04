import React from 'react';

const Notification = ({ notification }) => {
  if (!notification || !notification.message) {
    return null;
  }

  let className = 'notification'
  if (notification.type)
    className += ` ${notification.type}`
  return (
    <div className={className}>
      {notification.message}
    </div>
  );
};

export default Notification;