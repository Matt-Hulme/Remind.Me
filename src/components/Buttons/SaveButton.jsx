import React from 'react';

export default function SaveButton({ url, dateTime, notificationType }) {
  const handleSave = () => {
    // Create a data object with the data to send
    const data = {
      url,
      dateTime,
      notificationType,
    };

    // Send a POST request to your backend server
    fetch('/create-reminder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Response from server:', responseData);
        // Handle the server response as needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any error that occurs during the request
      });
  };

  return (
    <div className="SaveButtonContainer">
      <button type="button" className="SaveButton" onClick={handleSave}>
        <div>Save</div>
      </button>
    </div>
  );
}
