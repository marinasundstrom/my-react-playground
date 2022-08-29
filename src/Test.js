import './Test.css';

function Test(props) {
  return (
    <div className="App">
        <h2>{props.item.title}</h2>
    </div>
  );
}

export default Test;