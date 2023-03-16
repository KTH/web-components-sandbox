import React from "react";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  }, [loading]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(`I, "${event.currentTarget.textContent}", am clicked`);
    setLoading(true);
  }
  return (
    <div>
      <h1>Level 1</h1>
      <div>Hello world</div>
      <h1>Level 2</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Click me!"}
      </button>
      <h1>Level 3</h1>
      <div>I am a tooltip</div>
    </div>
  );
}
