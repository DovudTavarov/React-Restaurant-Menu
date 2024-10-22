const RestoMenu = ({ id, title, category, price, img, desc }) => {
  return (
    <>
      <div className="card">
        <div className="card-left">
          <img src={img} alt="" width="100" />
        </div>
        <div className="card-right">
          <div className="title">
            <strong>{title}</strong>
            <span>{price}</span>
          </div>
          <p>{desc}</p>
          <span className="category">{category}</span>
        </div>
      </div>
    </>
  );
};
export default RestoMenu;
