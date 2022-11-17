import "./potrCredit.css";
import React from "react";
import { useState } from "react";

function PotrCredit({ lang }) {
  const [value, setValue] = useState(500);
  const [months, setMonths] = useState(3);
  function creditCalc(value, months) {
    console.log(months);
    if (value < 10000) {
      console.log(7);
    } else if (value > 10000 && value < 50000) {
      console.log(6);
    } else if (value > 50000) {
      console.log(5);
    }
    const interest = {};
  }

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
        <div className="potr-section">1</div>
      ) : null}
      {Number(active.index) === 2 ? (
        <div className="potr-section">
          <h1>
            {lang === "EN"
              ? "Parameters"
              : lang === "BG"
              ? "Параметри"
              : "Parameter"}
            :
          </h1>
          <ul>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
              <i className="fa-solid fa-file-invoice"></i>
              <div>
                <h1>
                  {lang === "EN"
                    ? "Interest conditions"
                    : lang === "BG"
                    ? "Лихвени условия"
                    : "Zinsen"}
                </h1>
                <p>
                  {lang === "EN"
                    ? "The price parameters are adjusted according to:"
                    : lang === "BG"
                    ? "Ценовите параметри са съобразени спрямо:"
                    : "Die Preisparameter werden angepasst nach:"}
                  <br />
                  {lang === "EN"
                    ? "- The amount of the loan"
                    : lang === "BG"
                    ? "- Размера на кредита"
                    : "- Die Höhe des Darlehens"}
                </p>
              </div>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      ) : null}

      {Number(active.index) === 3 ? (
        <div className="potr-section">3</div>
      ) : null}
      {Number(active.index) === 4 ? (
        <div className="potr-section">4</div>
      ) : null}
      <div id="calc">
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
              min="500"
              max="70000"
              onChange={(e) => {
                setValue(Number(e.target.value));
                creditCalc(value, months);
              }}
            />
          </div>
          <div className="slider-wrapper">
            <p></p>
            <input
              defaultValue="6"
              type="range"
              min="6"
              max="120"
              onChange={(e) => {
                setMonths(Number(e.target.value));
                creditCalc(value, months);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PotrCredit;
