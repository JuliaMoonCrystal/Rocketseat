interface Buttonprops{
title?:string;
}

function App() {
  return (
    <div>
      <Button title="send 1" />;
      <Button title="send 2" />;
      <Button title="send 3" />;
    </div>
  );
}

function Button(props:Buttonprops) {
  return <button>{props.title}</button>;
}

export default App;