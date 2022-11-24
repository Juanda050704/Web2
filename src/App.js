import logo from './logo.svg';
import './App.css';
import 'bootstrap/js/dist/base-component';
import Main from './componet/layouts/Main';
import Header from './componet/helpers/Header';
import Footer from './componet/helpers/Footer';
function App() {
  return (
    <section className="App">
      <Header/>
      <Main/>
      <Footer/>
    </section>
  );
}

export default App;
