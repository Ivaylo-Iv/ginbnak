import "./footer.css";

function Footer({ lang, navigate }) {
  return (
    <>
      <div id="footer">
        <div id="footer-wrapper">
          <div>
            <h2>
              {lang === "EN"
                ? "About us:"
                : lang === "BG"
                ? "За нас:"
                : "Über uns:"}
            </h2>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>
                  <a href="tel:+35929520857">+359 2 952 0857</a>
                </span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>
                  <a href="mailto:ginbank@abv.bg">ginbank@abv.bg</a>
                </span>
              </li>
              <li>
                <i class="fa-solid fa-map-location-dot"></i>
                <span>
                  <a
                    target="_blank"
                    href={`https://www.google.com/maps/place/bul.+%22Vitosha%22+91,+1408+Ivan+Vazov,+Sofia/@42.6807224,23.3114601,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa8504ce458e11:0x2a64c27592b1df78!8m2!3d42.6807224!4d23.3136488`}
                  >
                    {lang === "EN"
                      ? "Sofia, 91 Vitosha Blvd"
                      : lang === "BG"
                      ? `гр. София, бул. "Витоша" 91`
                      : "Sofia, Vitosha Boulevard 91"}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2>
              {lang === "EN"
                ? "Individual customers:"
                : lang === "BG"
                ? "Индивидуални клиенти:"
                : "Individuelle Kunden:"}
            </h2>
            <ul>
              <li>
                <span>
                  {lang === "EN"
                    ? "Debit Card"
                    : lang === "BG"
                    ? "Дебитна Карта"
                    : "Debitkarte"}
                </span>
              </li>
              <li>
                <span>
                  {lang === "EN"
                    ? "Credit Card"
                    : lang === "BG"
                    ? "Кредитна Карта"
                    : "Kreditkarte"}
                </span>
              </li>
              <li
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/consumerCredit#credit-banner");
                }}
              >
                <span>
                  {lang === "EN"
                    ? "Consumer Credit"
                    : lang === "BG"
                    ? "Потребителски Кредит"
                    : "Verbraucherkredit"}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2>
              {lang === "EN"
                ? "Corporate clients:"
                : lang === "BG"
                ? "Корпоративни клиенти:"
                : "Firmenkunden:"}
            </h2>
            <ul>
              <li>
                <span>
                  {lang === "EN"
                    ? "Collection Account"
                    : lang === "BG"
                    ? "Набирателна Сметка"
                    : "Vermögensänderungskonten"}
                </span>
              </li>
              <li>
                <span>
                  {lang === "EN"
                    ? "Credit Card"
                    : lang === "BG"
                    ? "Кредитна Карта"
                    : "Kreditkarte"}
                </span>
              </li>
              <li>
                <span>
                  {lang === "EN"
                    ? "Debit Card"
                    : lang === "BG"
                    ? "Дебитна Карта"
                    : "Debitkarte"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
