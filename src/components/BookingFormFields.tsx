import React from 'react';
import { Field, Form } from 'react-final-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
                <form onSubmit={handleSubmit} className="formContainer">

                    <div className="formGroup">
                        <label>Дата:</label>
                        <Field name="date">
                            {({ input }) => (
                                <DatePicker
                                    {...input}
                                    selected={input.value}
                                    dateFormat="dd/MM/yyyy"
                                    className="customInput"
                                />
                            )}
                        </Field>
                        <label>Время:</label>
                        <Field name="time" component="select" className="customInput">
                            <option value="">Выберите время</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                        </Field>
                        <label>Услуга:</label>
                        <Field name="service" component="select" className="customInput">
                            <option value="">Выберите услугу</option>
                            <option value="Массаж">Массаж</option>
                            <option value="Парикмахерская услуга">Парикмахерская услуга</option>
                            <option value="Косметология">Косметология</option>
                            <option value="Ногтевой сервис">Ногтевой сервис</option>
                            </Field>
                        
                        <label>Филиал:</label>
                        <Field name="branch" component="select" className="customInput">
                            <option value="">Выберите филиал</option>
                            <option value="Филиал 1">Филиал 1</option>
                            <option value="Филиал 2">Филиал 2</option>
                            <option value="Филиал 3">Филиал 3</option>
                            <option value="Филиал 4">Филиал 4</option>
                        </Field>
                    </div>


                    <div className="formGroup">
                        <label>Имя:</label>
                        <Field name="firstName" component="input" type="text" className="customInput" />
                        <label>Фамилия:</label>
                        <Field name="lastName" component="input" type="text" className="customInput" />
                    </div>


                    <div className="formGroup">
                        <label>Номер телефона:</label>
                        <Field name="phoneNumber" component="input" type="tel" className="customInput" />
                        <label>Комментарий:</label>
                        <Field name="comment" component="textarea" className="customInput" />
                    </div>


                    <div className="formGroup">
                        <button type="submit" className="submitButton">Заказать</button>
                    </div>
                </form>
            )}
        />
    );
};

export default BookingFormFields;
