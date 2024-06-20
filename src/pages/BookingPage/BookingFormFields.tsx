import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingFormFields.sass";
import * as yup from "yup";
import PhoneNumberField from "./PhoneNumberField";
import { useTranslation } from "react-i18next";

interface BookingFormFieldsProps {
  onSubmit: (values: FormValues) => void;
}

interface FormValues {
  date: Date | null;
  time: string;
  service: string;
  branch: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  comment: string;
}

const BookingFormFields: React.FC<BookingFormFieldsProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\+?374[0-9]{8}$|^(374)[0-9]{8}$/, {
        message: t("invalidPhoneNumber"),
        excludeEmptyString: true,
      })
      .required(t("enterPhoneNumber")),
    comment: yup.string(),
  });

  const services = [
    t("massage"),
    t("hairService"),
    t("cosmetology"),
    t("nailService"),
  ];
  const branches = [t("branch1"), t("branch2"), t("branch3"), t("branch4")];
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

  const handleFormSubmit = (values: FormValues) => {
    setFormSubmitted(true);
    onSubmit(values);
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="formGroup">
            <div className="inputContainer">
              <label htmlFor="date" className="dateLabel">
                {t("date")}:
              </label>
              <Field name="date">
                {({ input }) => (
                  <DatePicker
                    {...input}
                    selected={input.value}
                    onChange={input.onChange}
                    dateFormat="dd/MM/yyyy"
                    id="date"
                    className="customInput DataInput"
                  />
                )}
              </Field>
            </div>
            <div className="inputContainer">
              <label>{t("time")}:</label>
              <Field name="time" component="select" className="customInput">
                <option value="">{t("selectTime")}</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Field>
            </div>
            <div className="inputContainer">
              <label>{t("service")}:</label>
              <Field name="service" component="select" className="customInput">
                <option value="">{t("selectService")}</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Field>
            </div>
            <div className="inputContainer">
              <label>{t("branch")}:</label>
              <Field name="branch" component="select" className="customInput">
                <option value="">{t("selectBranch")}</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </Field>
            </div>
          </div>

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
          </div>

          <div className="formGroup">
            <div className="inputContainer">
              <label>{t("phoneNumber")}:</label>
              <PhoneNumberField
                validationSchema={validationSchema}
                phoneNumberError={phoneNumberError}
                setPhoneNumberError={setPhoneNumberError}
              />
            </div>
            <div className="inputContainer">
              <label>{t("comment")}:</label>
              <Field
                name="comment"
                component="textarea"
                className="customInput"
              />
            </div>
          </div>

          <div className="formGroup">
            <button
              type="submit"
              className="submitButton"
              disabled={formSubmitted}
            >
              {t("submit")}
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default BookingFormFields;
