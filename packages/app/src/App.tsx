import React from "react";
import { MyComponent, KthButton, KthTooltip } from "stencil-react";

// defineCustomElements();

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

  function handleClick(event: React.MouseEvent<HTMLKthButtonElement>) {
    console.log(`I, "${event.currentTarget.textContent}", am clicked`);
    setLoading(true);
  }
  return (
    <div>
      <h1>Level 1</h1>
      <MyComponent first="Your" last="Name" />
      <h1>Level 2</h1>
      <KthButton onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Click me!"}
      </KthButton>
      <h1>Level 3</h1>
      <KthTooltip message="This is a extreeeemely long tooltip">
        Hello world
      </KthTooltip>
    </div>
  );
}
