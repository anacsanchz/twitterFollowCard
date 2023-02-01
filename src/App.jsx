import "./App.css";
import Card from "./Card";

function App() {
  return (
    <section className="cards">
      <Card userName="anacsanchz">
        Ana Sánchez
      </Card>
      <Card userName="kikobeats">
        Kiko Beats
      </Card>
      <Card userName="elonmusk">
        Elon Musk
      </Card>
    </section>
  );
}

export default App;
