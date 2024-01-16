import "./styles/app.css";
import MainForm from "../components/mainForm/mainForm";

export default function App() {
  return (
    <>
      <nav className="nav-bar">
        <h1>
          Kaas - <h1 className="color-orange">Io</h1>
        </h1>
      </nav>
      <MainForm />
    </>
  );
}
