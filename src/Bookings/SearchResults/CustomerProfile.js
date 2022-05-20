import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customerData, setCustomerData] = useState({});

  useEffect(() => {
    props.id && // A condition so that the fetch runs only when the props.id has a value
      fetch(
        `https://cyf-craig-dsilva-hotel-node.glitch.me/bookings/${props.id}`
      )
        .then(res => res.json())
        .then(data => setCustomerData(data));
  }, [props.id]);

  return props.id ? (
    <div className="customer-profile">
      <p>ID: {customerData.id}</p>
      <p>Email: {customerData.email}</p>
      <p>Room No: {customerData.roomId}</p>
    </div>
  ) : null;
};

export default CustomerProfile;
