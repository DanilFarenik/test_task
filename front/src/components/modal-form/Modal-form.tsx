import React from 'react';
import { Field, InjectedFormProps, reduxForm, } from 'redux-form';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { iProps } from "../modal";

import { requireField, maxLength, minLength, maxPrice, minPrice, isNumber } from "../../utils/validator";

export interface iTextField {
  label: string,
  input?: string,
  defaultValue?: string,
  meta: { touched: boolean, invalid: boolean, error: string | {} | boolean }
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: iTextField) => (
  <TextField
    variant="outlined"
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)


const style = {
  backgroundColor: "#222222",
  color: "#f5f5f5",
  borderRadius: "0px",
  border: "#336699 1px solid"
}

const maxLengthTitle = maxLength(20);
const maxLengthTextOrLink = maxLength(255);
const minLengthField = minLength(5);

class ModalForm extends React.Component<iProps & InjectedFormProps<{}, iProps>> {
  render() {
    const { handleClose, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Box m={1} bgcolor="background.paper">
          <Field validate={[requireField, isNumber, maxPrice, minPrice]} name="price" label="Price" component={renderTextField}></Field>
        </Box>
        <Box m={1} bgcolor="background.paper">
          <Field validate={[requireField, maxLengthTitle, minLengthField]} name="title" label="Title" component={renderTextField}></Field>
        </Box>
        <Box m={1} bgcolor="background.paper">
          <Field validate={[requireField, maxLengthTextOrLink, minLengthField]} name="description" label="Description" component={renderTextField}></Field>
        </Box>
        <Box m={1} bgcolor="background.paper">
          <Field validate={[requireField, maxLengthTextOrLink, minLengthField]} name="img" label="Image" component={renderTextField}></Field>
        </Box>

        <Box m={1} bgcolor="background.paper">
          <Button style={style} variant="contained" onClick={handleClose}>No Thanks</Button>
          <Button style={style} variant="contained" type="submit">Add</Button>
        </Box>
      </form>
    );
  }
}

const ReduxFormModal = reduxForm<{}, iProps>({
  form: 'create',
})(ModalForm);

export default ReduxFormModal;