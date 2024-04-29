import React from 'react';
import { connect } from 'react-redux';
import { updateFormData } from '../store/actions';
import BookingFormFields from './BookingFormFields';

interface BookingFormContainerProps {
    updateFormData: (values: any) => void;
}

const BookingFormContainer: React.FC<BookingFormContainerProps> = ({ updateFormData }) => {
    const handleSubmit = (values: any) => {
        updateFormData(values);
        console.log('Отправка данных:', values);
    };

    return (
        <BookingFormFields onSubmit={handleSubmit} />
    );
};

export default connect(null, { updateFormData })(BookingFormContainer);
