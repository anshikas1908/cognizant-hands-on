import "./App.css";
import office from "./images/office.jpg";

function App() {
  const heading = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore",
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Hyderabad",
    },
  ];

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>

      {officeList.map((officeItem, index) => (
        <div key={index}>
          <img
            src={office}
            alt="Office Space"
            width="25%"
            height="25%"
          />

          <h2>Name: {officeItem.Name}</h2>

          <h3
            style={{
              color: officeItem.Rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {officeItem.Rent}
          </h3>

          <h3>Address: {officeItem.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
