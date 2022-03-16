import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExtarnalUsers></ExtarnalUsers>
    </div>
  );
}
function ExtarnalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {users.map((user) => (
        <Countryes
          key={user?.name?.common}
          img={user?.flags?.png}
          name={user?.name?.common}
          population={user?.population}
          area={user?.area}
          img2={user?.coatOfArms.png}
          lan={user?.languages?.spa}
        ></Countryes>
      ))}
    </div>
  );
}
function Countryes(props) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "aquamarine",
          margin: "15px",
          padding: "15px",
          borderRadius: "20px",
        }}
      >
        <h2>Name: {props.name}</h2>
        <div style={{ marginBottom: "10px" }}>
          <img
            style={{ border: "2px solid maroon", borderRadius: "50%" }}
            width={"100px"}
            height={"100px"}
            src={props.img2}
            alt=""
          />
        </div>
        <img width={"200px"} height={"130px"} src={props.img} alt="" />
        <p>Population: {props.population}</p>
        <p>Area: {props.area}</p>
        <p>Languages: {props.lan}</p>
      </div>
    </div>
  );
}
export default App;
