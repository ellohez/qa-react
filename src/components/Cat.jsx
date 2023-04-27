
// Arrow function to return Cat as a representation
// of single native DOM component <div>
const Cat = props => (
    <div>
        <p>Name: {props.name}</p>
        <p>Colour: {props.colour}</p>
        <p>Age: {props.age}</p>
    </div>
);

export default Cat;