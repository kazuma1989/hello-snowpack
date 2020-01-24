// Import your web-ready dependencies
import { h, render } from "/web_modules/preact.js";

// Create your main app component
function SomePreactComponent() {
  return <h1 style={{ color: "red" }}>Hello, World!</h1>;
}

// Inject your application into the an element with the id `app`.
render(<SomePreactComponent />, document.getElementById("app"));
