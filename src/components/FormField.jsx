import React from 'react';

import {
  Form, Label, Input, Checkbox, Dropdown, Radio, Select, TextArea,
} from 'semantic-ui-react';

const numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
};

function numberToWord(value) {
  const type = typeof value;
  if (type === 'string' || type === 'number') {
    return numberToWordMap[value] || value;
  }

  return '';
}

const useWidthProp = (val, widthClass = '', canEqual = false) => {
  if (canEqual && val === 'equal') {
    return 'equal width';
  }
  const valType = typeof val;
  if ((valType === 'string' || valType === 'number') && widthClass) {
    return `${numberToWord(val)} ${widthClass}`;
  }
  return numberToWord(val);
};

const FormField = (fullprops) => {
  const {
    label,
    error,
    required,
    disabled,
    inline,
    width,
    className,
    control,
    ...props
  } = fullprops;
  const classes = [
    disabled ? 'disabled' : '',
    error ? 'error' : '',
    inline ? 'inline' : '',
    required ? 'required' : '',
    useWidthProp(width, 'wide'),
    'field',
    className,
  ].join(' ');
  let Control = control;
  if (Control === null || Control === undefined) {
    Control = Input;
  }
  const labelAbove = Control === Input || Control === TextArea || Control === Dropdown || Control === Select;
  const controlProps = props;
  if (!labelAbove) {
    controlProps.label = label;
  }
  const labelPointing = Control === Checkbox || Control === Radio ? 'left' : 'above';
  return (
    <Form.Field className={classes}>
      {labelAbove && label && <label>{label}</label>}
      <Control {...props} />
      {error && (
        <Label basic color="red" pointing={labelPointing}>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default FormField;
