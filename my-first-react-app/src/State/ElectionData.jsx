import React, { useState } from "react";

const ElectionData = () => {
  let [party, setParty] = useState("DMK");
  let [cm, setCm] = useState("M.K.Stalin");
  let [seats, setSeats] = useState(58);

  let updateElectionData = () => {
    setParty("TVK");
    setCm("J. Vijay (King)");
    setSeats(105);
  };

  return (
    <div>
      <h1>Tamilnadu Election Result 2026</h1>
      <h2>Party: {party}</h2>
      <h2>CM: {cm}</h2>
      <h2>Seats: {seats}</h2>
      <button onClick={updateElectionData}>Change Ruler</button>
    </div>
  );
};

export default ElectionData;
