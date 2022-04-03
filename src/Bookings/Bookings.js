import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults/SearchResults";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(bookings);
    setBookings(
      bookings.filter(guest => {
        return guest.firstName === searchVal || guest.surname === searchVal;
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
