import Card from "./Card";
const CardList = ({ users }) => {
  return (
    <div className="tc">
      {users.map((user, i) => {
        return (
          <Card
            key={users[i].id}
            name={users[i].name}
            id={users[i].id}
            email={users[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
