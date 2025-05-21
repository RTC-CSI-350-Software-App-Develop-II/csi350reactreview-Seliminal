function Restaurant(props) {
  //Presentational components are primarily focused on the visual appearance and styling.
  console.log(props)
  return (
    <div className="restaurant">
      <h1>{props.restaurant.name}</h1>
      <h3>{props.restaurant.address}</h3>
      <h3>{props.restaurant.phone}</h3>
      <h3>{props.restaurant.cuisine}</h3>
    </div>
  );
}

export default Restaurant;