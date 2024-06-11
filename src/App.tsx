import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingForm from "./components/BookingForm";
import CancellationPage from "./components/CancellationPage";
import "./App.sass";

const App: React.FC = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage("ru");
  }, [i18n]);

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="languageButtons">
          <button
            onClick={() => changeLanguage("en")}
            className={`languageButton ${
              i18n.language === "en" ? "active" : ""
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("ru")}
            className={`languageButton ${
              i18n.language === "ru" ? "active" : ""
            }`}
          >
            RU
          </button>
        </div>
        {location.pathname !== "/cancellation" && <h1>{t("welcome")}</h1>}
        <Routes>
          <Route path="/" element={<BookingForm onSubmit={handleSubmit} />} />
          <Route path="/cancellation" element={<CancellationPage />} />
        </Routes>
      </header>
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
