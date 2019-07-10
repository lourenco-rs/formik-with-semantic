import React from 'react';
import { Form, Input, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CustomInput = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, submitCount }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  componentProps: { label, width },
  ...props
}) => {
  const showError = !!(touched[field.name] && errors[field.name]);

  console.log(
    'Field:',
    JSON.stringify(field, null, 2),
    ' submitCount: ',
    submitCount,
    ' touched: ',
    touched[field.name],
    'errors: ',
    errors[field.name],
    ' showError',
    showError,
    'props:',
    props
  );

  return (
    <Form.Field error={showError} width={width}>
      <label>{label}</label>
      <Input {...field} />
      {showError && (
        <Label basic pointing color="red">
          {errors[field.name]}
        </Label>
        // <div className="fieldError">{errors[field.name]}</div>
      )}
    </Form.Field>
  );
};

CustomInput.propTypes = {
  componentProps: PropTypes.shape({
    label: PropTypes.string.isRequired,
    width: PropTypes.number,
  }).isRequired,
};

export default CustomInput;
