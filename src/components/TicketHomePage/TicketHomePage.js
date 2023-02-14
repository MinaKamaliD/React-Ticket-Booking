import React from "react";
import { Component } from "react";
import { useState } from "react";
import "./TicketHomePage.css";

///////// Class Component

class TicketHomePage extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        Iran: [
          "Tehran",
          "Mashhad",
          "Isfahan",
          "Kerman",
          "Tabriz",
          "Rasht",
          "Shiraz",
          "Zahedan",
        ],
        Turkey: [
          "Istanbul",
          "Ankara",
          "Izmir",
          "Bursa",
          "Antalya",
          "Şanlıurfa",
          "Konya",
        ],
        UnitedStates: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Phoenix",
          "Philadelphia",
          "San Antonio",
          "San Diego",
          "Dallas",
          "San Jose",
        ],
        France: [
          "Paris",
          "Nice",
          "Lyon",
          "Bordeaux",
          "Marseilles",
          "Strasbourg",
          "Lille",
        ],
      },
      currentCountry: "",
      currentCities: [],
    };
    this.currentCountryHandler = this.currentCountryHandler.bind(this);
  }
  currentCountryHandler(event) {
    let a = event.target.value;
    this.setState({ currentCountry: event.target.value });
    this.setState({ currentCities: this.state.info[event.target.value] });
  }

  render() {
    return (
      <div className="container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="number" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
        <input type="date" />
        <select onChange={this.currentCountryHandler}>
          <option value="countries" hidden>
            Country
          </option>
          <option value="Iran">Iran</option>
          <option value="Turkey">Turkey</option>
          <option value="UnitedStates">United States</option>
          <option value="France">France</option>
        </select>
        <select>
          <option value="city" hidden>
            City
          </option>
          {this.state.currentCities.map((city) => (
            <option>{city}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default TicketHomePage;
