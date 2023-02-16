import React, { useEffect } from "react";
import { Component } from "react";
import { useState } from "react";
import "./TicketHomePage.css";

const data = {
  // It doesn't need to add data in state, because we won't need to change them later. they are static data.
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
};

/////// Functional Component /////////

const TicketHomePage = () => {
  const [currentCities, setCurrentCities] = useState([]);
  const [currentCountry, setCurrentCountry] = useState("");

  //It's very important to know, each upadating functions are asynchronous so if we use them after each other, maybe occur some conflicts, therefore we can handle and solve this problem with useEffect hook. Maybe they are some another solotions for this problem, recommend to do some research on it later.

  useEffect(() => setCurrentCities(data[currentCountry]), [currentCountry]);

  const currentCountryHandler = (event) =>
    setCurrentCountry(event.target.value);

  return (
    <div className="container">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="number" placeholder="Phone Number" />
      <input type="email" placeholder="Email" />
      <input type="date" className="date" />
      <select onChange={currentCountryHandler}>
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
        {currentCities?.map(
          (
            city // recommend to learn more about "?." , "!!" and "??" operators
          ) => (
            <option key={city} value={city}>
              {city}
            </option>
          )
        )}
      </select>
    </div>
  );
};
export default TicketHomePage;

///////// Class Component ////////

// class TicketHomePage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       info: {
//         Iran: [
//           "Tehran",
//           "Mashhad",
//           "Isfahan",
//           "Kerman",
//           "Tabriz",
//           "Rasht",
//           "Shiraz",
//           "Zahedan",
//         ],
//         Turkey: [
//           "Istanbul",
//           "Ankara",
//           "Izmir",
//           "Bursa",
//           "Antalya",
//           "Şanlıurfa",
//           "Konya",
//         ],
//         UnitedStates: [
//           "New York",
//           "Los Angeles",
//           "Chicago",
//           "Houston",
//           "Phoenix",
//           "Philadelphia",
//           "San Antonio",
//           "San Diego",
//           "Dallas",
//           "San Jose",
//         ],
//         France: [
//           "Paris",
//           "Nice",
//           "Lyon",
//           "Bordeaux",
//           "Marseilles",
//           "Strasbourg",
//           "Lille",
//         ],
//       },
//       currentCountry: "",
//       currentCities: [],
//     };
//     this.currentCountryHandler = this.currentCountryHandler.bind(this);
//   }
//   currentCountryHandler(event) {
//     let a = event.target.value;
//     this.setState({ currentCountry: event.target.value });
//     this.setState({ currentCities: this.state.info[event.target.value] });
//   }

//   render() {
//     return (
//       <div className="container">
//         <input type="text" placeholder="First Name" />
//         <input type="text" placeholder="Last Name" />
//         <input type="number" placeholder="Phone Number" />
//         <input type="email" placeholder="Email" />
//         <input type="date" />
//         <select onChange={this.currentCountryHandler}>
//           <option value="countries" hidden>
//             Country
//           </option>
//           <option value="Iran">Iran</option>
//           <option value="Turkey">Turkey</option>
//           <option value="UnitedStates">United States</option>
//           <option value="France">France</option>
//         </select>
//         <select>
//           <option value="city" hidden>
//             City
//           </option>
//           {this.state.currentCities.map((city) => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   }
// }

// export default TicketHomePage;
