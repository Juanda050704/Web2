import SugarMommy from "../img/SugarMommy.png";
const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={SugarMommy} />
      <section className="botones">
      <button className="input_header">beneficion</button>
      <button className="input_header">ayudar con medicinas</button>
      <button className="input_header">ayudar de hogares</button>
      <button className="input_header">ayudar univesitaria</button>
      <button className="input_header">ayudar de escuela</button>
      <button className="input_header">ayuda derpotita</button>
      </section>
    </header>
  );
};
export default Header;
