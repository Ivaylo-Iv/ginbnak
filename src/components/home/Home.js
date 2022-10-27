import "./home.css";
import Slideshow from "./slider";

function Home({ lang, navigate }) {
  return (
    <>
      <Slideshow />
      <div id="home">
        <div id="home-wrapper">
          <div className="cards">
            <div
              onClick={() => {
                navigate("/consumerCredit");
              }}
              className="card"
            >
              <i className="fa-solid fa-sack-dollar"></i>
              <p>
                {lang === "EN"
                  ? "Consumer Credit"
                  : lang === "BG"
                  ? "Потребителски Кредит"
                  : "Verbraucherkredit"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="card">
              <i className="fa-solid fa-credit-card"></i>
              <p>
                {lang === "EN"
                  ? "Credit Card"
                  : lang === "BG"
                  ? "Кредитна Карта"
                  : "Kreditkarte"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="card">
              <i className="fa-regular fa-credit-card"></i>
              <p>
                {lang === "EN"
                  ? "Debit Card"
                  : lang === "BG"
                  ? "Дебитна Карта"
                  : "Debitkarte"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="card">
              <i className="fa-solid fa-vault"></i>
              <p>
                {lang === "EN" ? "Vault" : lang === "BG" ? "Трезор" : "Tresor"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="card">
              <i className="fa-sharp fa-solid fa-piggy-bank"></i>
              <p>
                {lang === "EN"
                  ? "Deposit Account"
                  : lang === "BG"
                  ? "Депозитна Сметка"
                  : "Einlagenkonten"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="card">
              <i className="fa-solid fa-dollar"></i>
              <p>
                {lang === "EN"
                  ? "Collection Account"
                  : lang === "BG"
                  ? "Набирателна Сметка"
                  : "Vermögensänderungskonten"}
              </p>
              <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
