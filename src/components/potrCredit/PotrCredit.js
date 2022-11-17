import "./potrCredit.css";
import React from "react";
import { useState, useEffect } from "react";

function PotrCredit({ lang }) {
  const [value, setValue] = useState(1000);
  const [months, setMonths] = useState(6);
  function creditCalc(value, months) {
    let interest;
    if (value < 3000 && value) {
      interest = 33.9;
    } else if (value >= 3000 && value < 5000) {
      interest = 23.9;
    } else if (value >= 5000 && value < 10000) {
      interest = 13.9;
    } else if (value >= 10000 && value < 20000) {
      interest = 9.9;
    } else if (value >= 20000 && value < 30000) {
      interest = 7.9;
    } else if (value >= 30000 && value < 50000) {
      interest = 7.4;
    } else if (value >= 50000 && value <= 70000) {
      interest = 6.9;
    }
    const percent = interest / 100;
    const finalValue =
      (Number(value) + Number(value) * percent) / Number(months);
    const wholeValue = Number(value) + Number(value) * percent;
    document.getElementById("wh-val").innerText = wholeValue;
    document.getElementById("mth-pay").innerText = finalValue.toFixed(2);
    document.getElementById("mth-pr").innerText = interest;
  }
  useEffect(() => {
    creditCalc(value, months);
  });

  const [active, setActive] = useState({
    status: false,
    element: null,
    index: null,
  });
  let c;

  function caret(e) {
    if (!active.status) {
      c = {
        status: true,
        element: document.getElementById("main-caret"),
        index: 1,
      };
    } else {
      c = active;
    }
    const main = document.getElementById("main-caret");
    if (
      e.target.id === "main-caret" &&
      !e.target.children[2].classList.contains("none")
    ) {
      setActive({
        status: true,
        element: e.target,
        index: e.target.dataset.index,
      });
    } else {
      c.element.children[2].classList.add("none");
      e.target.children[2].classList.remove("none");
      setActive({
        status: true,
        element: e.target,
        index: e.target.dataset.index,
      });
    }
  }

  return (
    <>
      <div id="credit-banner"></div>
      <div className="mini-menu">
        <ul className="mini-links">
          <li data-index="1" id="main-caret" onClick={caret}>
            <i className="fa-solid fa-circle-info mini-icons"></i>
            <span className="mini-link-title">
              {lang === "EN"
                ? "Information"
                : lang === "BG"
                ? "Информация"
                : "Information"}
            </span>
            <i data-b="1" className="fa-solid fa-caret-up display"></i>
          </li>
          <li data-index="2" onClick={caret}>
            <i className="fa-solid fa-sliders mini-icons"></i>
            <span className="mini-link-title">
              {lang === "EN"
                ? "Parameters"
                : lang === "BG"
                ? "Параметри"
                : "Parameter"}
            </span>
            <i data-b="0" className="fa-solid fa-caret-up none display"></i>
          </li>
          <li data-index="3" onClick={caret}>
            <i className="fa-solid fa-percent mini-icons"></i>
            <span className="mini-link-title">
              {lang === "EN"
                ? "Fees and commissions"
                : lang === "BG"
                ? "Такси и комисионни"
                : "Gebühren und Kommissionen"}
            </span>
            <i data-b="2" className="fa-solid fa-caret-up none display"></i>
          </li>
          <li data-index="4" onClick={caret}>
            <i className="fa-solid fa-file mini-icons"></i>
            <span className="mini-link-title">
              {lang === "EN"
                ? "Documents"
                : lang === "BG"
                ? "Документи"
                : "Dokumente"}
            </span>
            <i data-b="3" className="fa-solid fa-caret-up none display"></i>
          </li>
        </ul>
      </div>
      {Number(active.index) === 1 || active.index === null ? (
        <div className="potr-section">
          <h1 style={{ textAlign: "center" }}>
            {lang === "EN"
              ? "Consumer Credit"
              : lang === "BG"
              ? "Потребителски Кредит"
              : "Verbraucherkredit"}
          </h1>
          <div>
            <div id="potr-info">
              {lang === "EN" ? (
                <p></p>
              ) : lang === "BG" ? (
                <p
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  Потребителският кредит е отложено потребление! Или казано
                  иначе – “утрешното” потребление на стока, услуга или нещо
                  друго, но днес. <br />
                  Потреблението е в основата на този тип финансов продукт. Ако
                  например изтеглите потребителски кредит, за да си купите
                  пералня. Потребителският кредти е необезпечен Тоест няма залог
                  на недвижимо или друго имущество. Стандартното обезпечение по
                  потребителски кредити почти винаги е изискването за превод на
                  работна заплата. <br />
                  Допълнение към това може да е изискване за поръчителство. То
                  само по себе си обаче се компроментира достатъчно вече в
                  България и банките все повече държат именно на превода на
                  трудово възнаграждение. Можем да кажем, че това е формалното
                  обезпечение, на иначе необезпечения потребителски кредит.
                  Лихвата по потребителския кредит не се променя Това е факт в
                  мнозинството от случаите. Потребителските кредити почти винаги
                  са с фиксирана лихва за определен срок (доста често това е
                  целият срок на кредита). На пазара и то с много малки
                  изключения, няма фиксирани лихви по ипотечните кредити. При
                  потребителските ситуацията е по-различна. Банките тук държат
                  да имат повече предсказуемост и лостове, с които да извлекат
                  възвръщаемост. За това обаче трябва да видите повече в нашия
                  коментар за кредити с фиксирана лихва. Потребителският кредит
                  е необезпечен и е с доста по-кратък срок от ипотечните
                  кредити. Като цяло максималният срок на пазара е 10 години.
                  Въпросът е до каква степен съответните банки обвързват
                  лихвените равнища, които прилагат със срока на кредита. Много
                  често банките дават най-добрите лихви на кредити със срок от 5
                  години. Затова и тук според нас важи логиката, че е важно как
                  вноската кореспондира на вашия бюджет.
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      ) : null}
      {Number(active.index) === 2 ? (
        <div className="potr-section">
          <h1 style={{ textAlign: "center" }}>
            {lang === "EN"
              ? "Parameters"
              : lang === "BG"
              ? "Параметри"
              : "Parameter"}
          </h1>
          <div id="par-potr">
            <div>
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h1>
                  {lang === "EN" ? "Term" : lang === "BG" ? "Срок" : "Laufzeit"}
                </h1>
                <p>
                  {lang === "EN"
                    ? "From 3 to 120 months"
                    : lang === "BG"
                    ? "От 3 до 120 месеца"
                    : "Von 3 bis 120 Monate"}
                </p>
              </div>
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-dollar-sign"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Currency"
                    : lang === "BG"
                    ? "Валута"
                    : "Währung"}
                </h1>
                <p>
                  {lang === "EN" ? "Leva" : lang === "BG" ? "Лева" : "Leva"}
                </p>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-arrow-down"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Minimum size"
                    : lang === "BG"
                    ? "Минимален размер"
                    : "Mindestmaß"}
                </h1>
                <p>
                  {lang === "EN"
                    ? "150 BGN"
                    : lang === "BG"
                    ? "150 лева"
                    : "150 Lv"}
                </p>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-arrow-up"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Maximum size"
                    : lang === "BG"
                    ? "Максимален размер"
                    : "Maximalgröße"}
                </h1>
                <p>
                  {lang === "EN"
                    ? "70,000 BGN"
                    : lang === "BG"
                    ? "70 000 лева"
                    : "70.000 Lv"}
                </p>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-percent"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Interest rate type"
                    : lang === "BG"
                    ? "Вид лихвен процент"
                    : "Art des Zinssatzes"}
                </h1>
                <p>
                  {lang === "EN"
                    ? "Fixed for the entire term of the loan"
                    : lang === "BG"
                    ? "Фиксиран за целия период на кредита"
                    : "Festgelegt für die gesamte Laufzeit des Darlehens"}
                </p>
              </div>
            </div>
            <div>
              <i className="fa-solid fa-file-invoice"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Collateral"
                    : lang === "BG"
                    ? "Обезпечение"
                    : "Sicherheit"}
                </h1>
                <p>
                  {lang === "EN" ? (
                    <>
                      {"Without collateral"} <br />{" "}
                      {"Subject to individual assessment"} <br />{" "}
                      {"according to the client's risk profile."}
                    </>
                  ) : lang === "BG" ? (
                    <>
                      {" "}
                      {"Без обезпечение"} <br />{" "}
                      {"Подлежи на индивидуална преценка"} <br />{" "}
                      {" според рисковия профил на клиента."}
                    </>
                  ) : (
                    <>
                      {"Ohne Sicherheiten"} <br />{" "}
                      {"Vorbehaltlich individueller Prüfung gemäß"} <br />{" "}
                      {"dem Risikoprofil des Kunden."}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {Number(active.index) === 3 ? (
        <div className="potr-section">3</div>
      ) : null}
      {Number(active.index) === 4 ? (
        <div className="potr-section">4</div>
      ) : null}
      <div id="calc">
        <div>
          <h1>
            {lang === "EN"
              ? "Calculate the monthly payment"
              : lang === "BG"
              ? "Изчислете месечната вноска"
              : "Berechnen Sie die monatliche Zahlung"}
          </h1>
          <div id="sliders">
            <div className="slider-wrapper">
              <p>
                {lang === "EN"
                  ? `I want to receive financing for ${value} BGN`
                  : lang === "BG"
                  ? `Искам да получа финансиране за ${value} BGN`
                  : `Ich möchte eine Finanzierung erhalten für ${value} BGN`}
              </p>
              <input
                type="range"
                min="1000"
                max="70000"
                step="500"
                onChange={(e) => {
                  setValue(Number(e.target.value));
                }}
              />
            </div>
            <div className="slider-wrapper">
              <p>
                {lang === "EN"
                  ? `Repayment term: ${months} months`
                  : lang === "BG"
                  ? `Срок на погасяване: ${months} месеца`
                  : `Rückzahlungsfrist: ${months} monate`}
              </p>
              <input
                defaultValue="6"
                type="range"
                min="6"
                max="120"
                onChange={(e) => {
                  setMonths(Number(e.target.value));
                }}
              />
            </div>
            <p>
              {lang === "EN"
                ? `Monthly payment (${months} months)`
                : lang === "BG"
                ? `Месечна вноска (${months}мес.)`
                : `Monatliche Bezahlung (${months} monate)`}{" "}
              <strong>
                <span id="mth-pay">89.17</span>
                {" BGN"}
              </strong>
            </p>
            <p>
              {lang === "EN"
                ? `Interest rate ${months} months`
                : lang === "BG"
                ? `Лихвен процент (${months}мес.)`
                : `Zinsrate ${months} monate`}{" "}
              <strong>
                <span id="mth-pr">89.17</span>
                {" %"}
              </strong>
            </p>
            <p>
              {lang === "EN"
                ? `Total amount due:`
                : lang === "BG"
                ? `Обща дължима сума:`
                : `Fälliger Gesamtbetrag:`}
              <strong>
                {" "}
                <span id="wh-val">1339</span>
                {" BGN"}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PotrCredit;
