import Food_item from "./food_item";

const Menus = ({ menu, type }) => {
  console.log(type);
  return (
    <main className="section-center">
      {menu.map((food) => {
        if (type === "All") {
          return <Food_item key={food.id} food={food} />;
        } else if ("breakfast" === type && food.category === type) {
          return <Food_item key={food.id} food={food} />;
        } else if ("lunch" === type && food.category === type) {
          return <Food_item key={food.id} food={food} />;
        } else if ("shakes" === type && food.category === type) {
          return <Food_item key={food.id} food={food} />;
        }
      })}
    </main>
  );
};
export default Menus;
