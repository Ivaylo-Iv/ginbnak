import "./Nav.css";
import logo from "../../assets/img/logo.svg";
function Nav({ lang, setLang, navigate }) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      document.getElementById("nav").classList.add("moved");
    } else {
      document.getElementById("nav").classList.remove("moved");
    }
  });
  return (
    <div id="nav">
      <div id="nav-wrapper" className="shadow">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
          id="nav-logo"
        >
          <img
            src={
              "https://res.cloudinary.com/nail-salon/image/upload/v1665655263/defaults/logo_zwyhkb.svg"
            }
            alt="Global Invest Bank"
            title="Golbal Invest Bank"
          />
        </div>

        <ul id="nav-links">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            {lang === "BG" ? "Начало" : lang === "DE" ? "Startseite" : "Home"}
          </li>
          <li>
            <div className="dropdown">
              <span>
                {lang === "EN"
                  ? "Individual Customers"
                  : lang === "BG"
                  ? "Индивидуални Клиенти"
                  : "Individuelle Kunden"}
              </span>
              <div className="dropdown-content">
                <p>
                  {lang === "EN"
                    ? "Current Account"
                    : lang === "BG"
                    ? "Разплащателна Сметка"
                    : "Girokonto"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Deposit Account"
                    : lang === "BG"
                    ? "Депозитна Сметка"
                    : "Einlagenkonten"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Debit Card"
                    : lang === "BG"
                    ? "Дебитна Карта"
                    : "Debitkarte"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Credit Card"
                    : lang === "BG"
                    ? "Кредитна Карта"
                    : "Kreditkarte"}
                </p>
                <p
                  onClick={() => {
                    navigate("/consumerCredit");
                  }}
                >
                  {lang === "EN"
                    ? "Consumer Credit"
                    : lang === "BG"
                    ? "Потребителски Кредит"
                    : "Verbraucherkredit"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Vault"
                    : lang === "BG"
                    ? "Трезор"
                    : "Tresor"}
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <span>
                {lang === "EN"
                  ? "Small Business | Corporate Customers"
                  : lang === "BG"
                  ? "Малък Бизнес | Корпоративни Клиенти"
                  : "Kleinunternehmen | Firmenkunden"}
              </span>
              <div className="dropdown-content">
                <p>
                  {lang === "EN"
                    ? "Current Account"
                    : lang === "BG"
                    ? "Разплащателна Сметка"
                    : "Girokonto"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Deposit Account"
                    : lang === "BG"
                    ? "Депозитна Сметка"
                    : "Einlagenkonten"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Debit Card"
                    : lang === "BG"
                    ? "Дебитна Карта"
                    : "Debitkarte"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Credit Card"
                    : lang === "BG"
                    ? "Кредитна Карта"
                    : "Kreditkarte"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Collection Account"
                    : lang === "BG"
                    ? "Набирателна Сметка"
                    : "Vermögensänderungskonten"}
                </p>
                <p>
                  {lang === "EN"
                    ? "Vault"
                    : lang === "BG"
                    ? "Трезор"
                    : "Tresor"}
                </p>
              </div>
            </div>
          </li>
          <li>
            {lang === "EN" ? "About" : lang === "BG" ? "За" : "Über"} Global
            Invest Bank
          </li>
          <li
            onClick={() => {
              if (lang !== "BG") {
                setLang("BG");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            BG
          </li>
          <li
            onClick={() => {
              if (lang !== "DE") {
                setLang("DE");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            DE
          </li>
          <li
            onClick={() => {
              if (lang !== "EN") {
                setLang("EN");
                console.log(1);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            EN
          </li>
        </ul>
        <div id="nav-mobile">
          <i
            onClick={() => {
              const el = document.getElementById("ham");
              const nav = document.getElementById("nav-links");
              nav.classList.toggle("show-nav");
              if (el.classList.contains("fa-bars")) {
                el.classList.remove("fa-bars");
                el.classList.add("fa-xmark");
              } else {
                el.classList.remove("fa-xmark");
                el.classList.add("fa-bars");
              }
            }}
            id="ham"
            style={{ color: "white", fontSize: "2.1rem", cursor: "pointer" }}
            className="fa-solid fa-bars"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
