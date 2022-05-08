const Card = ({ id, name, email }) => {
  return (
    <div className="bg-washed-red  dib br3 pa3 ma3 grow bw2 shadow-2 tc">
      <div>
        <img src={`https://robohash.org/${id}?set=set4`} alt="Cat_Image" />
      </div>
      <h1 className="f3">{name}</h1>
      <p className="f4">{email}</p>
    </div>
  );
};

export default Card;
