import ReactDOM from "react-dom/client";

const App = () => <h1>Hello, with Bun and TypeScript!</h1>;

if (typeof document !== "undefined") {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(<App />);
}
