import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { useTranslation } from "react-i18next";
import "./BookingFormFields.sass";

const CancellationPage: React.FC = () => {
  const { t } = useTranslation();
  const [orderInfo, setOrderInfo] = useState<any>(null);

  const handleSubmit = (values: any) => {
    console.log("Отмена заказа:", values);
    // Здесь нужно будет подключить БД
    // Пока что имитируем наличие заказа
    setOrderInfo({
      service: "Пример услуги",
      date: "01/01/2024",
      time: "14:00",
    });
  };

  const handleCancelOrder = () => {
    console.log("Заказ отменен");
    // Здесь нужно будет подключить БД для удаления заказа
    setOrderInfo(null);
  };

  return (
    <div className="formContainer">
      <h2>{t("cancellationPageTitle")}</h2>
      {!orderInfo ? (
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="formContainer">
              <div className="formGroup">
                <div className="inputContainer">
                  <label>{t("firstName")}:</label>
                  <Field
                    name="firstName"
                    component="input"
                    type="text"
                    className="customInput"
                  />
                </div>
                <div className="inputContainer">
                  <label>{t("lastName")}:</label>
                  <Field
                    name="lastName"
                    component="input"
                    type="text"
                    className="customInput"
                  />
                </div>
                <div className="inputContainer">
                  <label>{t("phoneNumber")}:</label>
                  <Field
                    name="phoneNumber"
                    component="input"
                    type="text"
                    className="customInput"
                    placeholder="+374XXXXXXXX"
                  />
                </div>
              </div>
              <button type="submit" className="submitButton">
                {t("findOrder")}
              </button>
            </form>
          )}
        />
      ) : (
        <div className="formContainer">
          <h3>{t("orderDetails")}</h3>
          <p>
            {t("service")}: {orderInfo.service}
          </p>
          <p>
            {t("date")}: {orderInfo.date}
          </p>
          <p>
            {t("time")}: {orderInfo.time}
          </p>
          <button onClick={handleCancelOrder} className="submitButton">
            {t("cancelOrder")}
          </button>
        </div>
      )}
    </div>
  );
};

export default CancellationPage;
