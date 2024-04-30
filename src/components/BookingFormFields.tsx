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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Дата:</label>
                        <Field name="date">
                            {({ input }) => (
                                <DatePicker {...input} selected={input.value} dateFormat="dd/MM/yyyy" />
                            )}
                        </Field>
                    </div>

                    <div>
                        <label>Время:</label>
                        <Field name="time">
                            {({ input }) => (
                                <select {...input}>
                                    <option value="">Время</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                </select>
                            )}
                        </Field>
                    </div>

                    <div>
                        <label>Услуга:</label>
                        <Field name="service" component="select">
                                    <option value="">Выберите услугу</option>
                                    <option value="Массаж">Массаж</option>
                                    <option value="Парикмахерская услуга">Парикмахерская услуга</option>
                                    <option value="Косметология">Косметология</option>
                                    <option value="Ногтевой сервис">Ногтевой сервис</option>
                        </Field>
                    </div>


                    <div>
                        <label>Филиал:</label>
                        <Field name="branch" component="select">
                                    <option value="">Выберите филиал</option>
                                    <option value="Филиал 1">Филиал 1</option>
                                    <option value="Филиал 2">Филиал 2</option>
                                    <option value="Филиал 3">Филиал 3</option>
                                    <option value="Филиал 4">Филиал 4</option>
                        </Field>
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
