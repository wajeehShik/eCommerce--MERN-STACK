import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import { words } from "./words";

function App() {
  return (
     
      <div className="layout">
    <Header/>
      <main>
        {words.content}
      </main>
   <Footer name="test"/>
      </div>
  );
}

export default App;
