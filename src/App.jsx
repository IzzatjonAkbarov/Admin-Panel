import React from "react";
import Aside from "./components/aside";
import Mainside from "./components/mainside";

const App = () => {
  return (
    <div className="flex">
      <Aside />
      <Mainside />
    </div>
  );
};

export default App;
