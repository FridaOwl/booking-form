import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingFormFields.css';
import * as yup from 'yup';
import PhoneNumberField from './PhoneNumberField';

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
    const [phoneNumberError, setPhoneNumberError] = useState<string | null>(null);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false); // Состояние для отслеживания отправки формы

    const validationSchema = yup.object().shape({
        phoneNumber: yup
            .string()
            .matches(/^\+?374[0-9]{8}$|^(374)[0-9]{8}$/, {
                message: 'Неверный номер',
                excludeEmptyString: true,
            })
            .required('Введите номер'),
        comment: yup.string(),
    });

    const services = ["Массаж", "Парикмахерская услуга", "Косметология", "Ногтевой сервис"];
    const branches = ["Филиал 1", "Филиал 2", "Филиал 3", "Филиал 4"];
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
                            {times.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </Field>
                        <label>Услуга:</label>
                        <Field name="service" component="select" className="customInput">
                            <option value="">Выберите услугу</option>
                            {services.map(service => (
                                <option key={service} value={service}>{service}</option>
                            ))}
                        </Field>
                        <label>Филиал:</label>
                        <Field name="branch" component="select" className="customInput">
                            <option value="">Выберите филиал</option>
                            {branches.map(branch => (
                                <option key={branch} value={branch}>{branch}</option>
                            ))}
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
                        <PhoneNumberField 
                            validationSchema={validationSchema} 
                            phoneNumberError={phoneNumberError} 
                            setPhoneNumberError={setPhoneNumberError} 
                        />
                        <label>Комментарий:</label>
                        <Field name="comment" component="textarea" className="customInput" />
                    </div>

                    <div className="formGroup">
                        <button type="submit" className="submitButton" disabled={formSubmitted}>
                            Заказать
                        </button>
                    </div>
                </form>
            )}
        />
    );
};

export default BookingFormFields;
