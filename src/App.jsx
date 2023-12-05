import { useState } from "react";
import "./styles.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  const [selectedKey, setSelectedKey] = useState("1");
  const handleIcons = (key) => {
    console.log(key);
    setSelectedKey(key);
  };

  return (
    <div>
      <Sidebar handleIcons={handleIcons} selectedKey={selectedKey} />
    </div>
  );
}

export default App;
