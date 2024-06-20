import React from "react";
import { connect } from "react-redux";
import { updateFormData } from "../../store/actions";
import BookingFormFields from "./BookingFormFields";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface BookingFormProps {
  updateFormData: (values: any) => void;
  onSubmit: (values: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  updateFormData,
  onSubmit,
}) => {
  const { t } = useTranslation();

  const handleSubmit = (values: any) => {
    updateFormData(values);
    onSubmit(values);
    console.log("Отправка данных:", values);
  };

  return (
    <div>
      <BookingFormFields onSubmit={handleSubmit} />
      <Link to="/cancellation">{t("cancelBooking")}</Link>
    </div>
  );
};

export default connect(null, { updateFormData })(BookingForm);
