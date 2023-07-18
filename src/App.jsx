import { useState } from "react";
import food from "./data";
import Menus from "./menus";

const App = () => {
  const [menu, setMenu] = useState(food);
  const [menuType, setMenuType] = useState("All");
  const changeMenu = (temp) => {
    setMenuType(temp);
  };

  return (
    <>
      <main className="menu ">
        <h3 className="title">Our Menu</h3>
        <div className="title-underline"></div>
        <div className="btn-container ">
          <button
            className="btn"
            onClick={() => {
              changeMenu("All");
            }}
          >
            All
          </button>
          <button
            className="btn"
            onClick={() => {
              changeMenu("breakfast");
            }}
          >
            Breakfast
          </button>
          <button
            className="btn"
            onClick={() => {
              changeMenu("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="btn"
            onClick={() => {
              changeMenu("shakes");
            }}
          >
            Shakes
          </button>
        </div>
        <Menus menu={menu} type={menuType}></Menus>
      </main>
    </>
  );
};
export default App;
