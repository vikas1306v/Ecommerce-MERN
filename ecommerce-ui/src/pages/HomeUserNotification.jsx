// NotificationsPage.js
import React from 'react';

const notifications = [
  { id: '1', message: 'New order placed', timestamp: '2023-01-01T12:30:00' },
  { id: '2', message: 'Payment received', timestamp: '2023-01-02T09:45:00' },
  // Add more notifications as needed
];

const NotificationsPage = () => {
  return (
    <div className=" mt-20 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="border-b py-2">
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-gray-500 text-sm">{formatTimestamp(notification.timestamp)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Helper function to format timestamp
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
};

export default NotificationsPage;
