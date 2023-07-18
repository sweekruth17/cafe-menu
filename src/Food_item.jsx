const Food_item = ({ food }) => {
  const { id, title, category, price, img, desc } = food;
  return (
    <article className="menu-item ">
      <img src={img} alt={title} className="img" />

      <div className="item-info">
        <header>
          <h5 className="">{title}</h5>
          <span className="item-price">${price}</span>
        </header>
      </div>
      <p className="item-info item-text">{desc}</p>
    </article>
  );
};
export default Food_item;
