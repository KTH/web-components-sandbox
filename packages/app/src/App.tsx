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
      <button onClick={handleClick} disabled={loading}>
        Click me!
      </button>
      <div>I am a tooltip</div>
    </div>
  );
}
