import "./Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.class}</p>
      <p><i>{item.hobbies}</i></p>
    </div>
  );
}

export default Card;
