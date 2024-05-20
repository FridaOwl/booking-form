import React from 'react';
import { connect } from 'react-redux';
import { updateFormData } from '../store/actions';
import BookingFormFields from './BookingFormFields';

interface BookingFormProps {
    updateFormData: (values: any) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ updateFormData }) => {
    const handleSubmit = (values: any) => {
        updateFormData(values);
        console.log('Отправка данных:', values);
    };

    return (
        <div>
            <h2>Форма бронирования</h2>
            <BookingFormFields onSubmit={handleSubmit} />
        </div>
    );
};

export default connect(null, { updateFormData })(BookingForm);
