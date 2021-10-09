import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="image" src={props.image} alt="product" />
      <h1 className="title">{props.title}</h1>
      <div className="price">${props.price}</div>
      <div className="rating">
        <div className="rate">⭐{props.rating.rate}</div>
        <div className="count">({props.rating.count})</div>
      </div>
    </div>
  );
};

export default Card;
