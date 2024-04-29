import React from 'react';
import { Field, Form } from 'react-final-form';
import './BookingFormFields.css';

interface BookingFormFieldsProps {
    onSubmit: (values: any) => void;
}

const BookingFormFields: React.FC<BookingFormFieldsProps> = ({ onSubmit }) => {
    const handleSubmit = (values: any) => {
        onSubmit(values);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Дата:</label>
                        <Field name="date" component="input" type="date" />
                    </div>
                    <div>
                        <label>Время:</label>
                        <Field name="time" component="input" type="time" />
                    </div>
                    <div>
                        <label>Услуга:</label>
                        <Field name="service" component="input" type="text" />
                    </div>
                    <div>
                        <label>Филиал:</label>
                        <Field name="branch" component="input" type="text" />
                    </div>
                    <div>
                        <label>Имя:</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div>
                        <label>Фамилия:</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div>
                        <label>Номер телефона:</label>
                        <Field name="phoneNumber" component="input" type="tel" />
                    </div>
                    <div>
                        <label>Комментарий:</label>
                        <Field name="comment" component="textarea" />
                    </div>
                    <button type="submit">Заказать</button>
                </form>
            )}
        />
    );
};

export default BookingFormFields;
