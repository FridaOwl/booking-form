import React from 'react';
import { Field } from 'react-final-form';
import * as yup from 'yup';

interface PhoneNumberFieldProps {
    validationSchema: yup.ObjectSchema<{ phoneNumber: string }>;
    phoneNumberError: string | null;
    setPhoneNumberError: (error: string | null) => void;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({ validationSchema, phoneNumberError, setPhoneNumberError }) => {

    const handlePhoneNumberChange = (value: string) => {
        validationSchema
            .validate({ phoneNumber: value })
            .then(() => setPhoneNumberError(null))
            .catch((error) => {
                if (error.path === 'phoneNumber') {
                    setPhoneNumberError(error.errors[0]);
                }
            });
    };

    return (
        <Field name="phoneNumber">
            {({ input, meta }) => (
                <div>
                    <input
                        {...input}
                        type="text"
                        className="customInput"
                        placeholder="+374XXXXXXXX"
                        onChange={(e) => {
                            input.onChange(e);
                            handlePhoneNumberChange(e.target.value);
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
