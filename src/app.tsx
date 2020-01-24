// Import your web-ready dependencies
import { h, render } from "/web_modules/preact.js";
import { useState } from "/web_modules/preact/hooks.js";
import css from "https://unpkg.com/csz";

// Create your main app component
function SomePreactComponent() {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(v => !v);

  return (
    <h1
      class={css`
        color: ${active ? "red" : "initial"};
        font-family: sans-serif;
      `}
      onClick={toggle}
    >
      Hello, World!
    </h1>
  );
}

// Inject your application into the an element with the id `app`.
render(<SomePreactComponent />, document.getElementById("app")!);
