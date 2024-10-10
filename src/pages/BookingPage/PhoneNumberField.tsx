import React, { useEffect } from "react";
import { Field } from "react-final-form";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

interface PhoneNumberFieldProps {
  validationSchema: yup.ObjectSchema<{ phoneNumber: string }>;
  phoneNumberError: string | null;
  setPhoneNumberError: (error: string | null) => void;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  validationSchema,
  phoneNumberError,
  setPhoneNumberError,
}) => {
  const { t, i18n } = useTranslation();

  const handlePhoneNumberChange = (value: string) => {
    if (value === "") {
      setPhoneNumberError(t("errors.enterValidPhoneNumber"));
      return;
    }

    validationSchema
      .validate({ phoneNumber: value })
      .then(() => setPhoneNumberError(null))
      .catch((error) => {
        if (error.path === "phoneNumber") {
          setPhoneNumberError(t("errors.invalidPhoneNumber"));
        }
      });
  };

  useEffect(() => {
    handlePhoneNumberChange("");
  }, [i18n.language]);

  return (
    <Field name="phoneNumber">
      {({ input, meta }) => (
        <div className="formGroup">
          <input
            {...input}
            type="text"
            className="customInput"
            placeholder="+7XXXXXXXXXX"
            onChange={(event) => {
              input.onChange(event);
              handlePhoneNumberChange(event.target.value);
            }}
          />
          {(meta.error || phoneNumberError) && meta.touched && (
            <span className="error">{meta.error || phoneNumberError}</span>
          )}
        </div>
      )}
    </Field>
  );
};

export default PhoneNumberField;
