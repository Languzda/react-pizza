import "./styles/Home.scss";

const HomePage = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Witaj w naszej Pizzerii</h1>
        <p className="header__subtitle">
          U nas dostaniesz najbardziej reaktywną pizze w mieście
        </p>
        <a href="/menu" className="header__button">
          Zobacz menu{" "}
        </a>
      </header>
    </>
  );
};

export default HomePage;
