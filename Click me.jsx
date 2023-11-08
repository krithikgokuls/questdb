const App = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <button data-testid="button" onClick={handleClick}>
      Click me!
    </button>
  );
};

export default App;
