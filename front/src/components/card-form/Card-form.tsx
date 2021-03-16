import React, { useEffect } from 'react';
import { Field, InjectedFormProps, reduxForm, } from 'redux-form';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { iTextField } from "../modal-form";
import { iProduct } from "../../utils/type";

import { requireField, maxLength, minLength, maxPrice, minPrice, isNumber } from "../../utils/validator";

const useStyles = makeStyles({
  button: {
    width: "100%",
    color: "#333333",
    backgroundColor: "#e5e5e5",
    textTransform: "none",
    borderRadius: 0,
    marginTop: 10
  }, input: {
    width: "100%",
    borderRadius: 0,
  },
});

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: iTextField) => (
  <TextField
    variant="outlined"
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

const maxLengthTitle = maxLength(20);
const maxLengthTextOrLink = maxLength(255);
const minLengthField = minLength(5);

interface iProps {
  data: iProduct,
  remove: () => void
}

const CardForm: React.FC<iProps & InjectedFormProps<{}, iProps>> = (props) => {
  const { remove, data, initialize, handleSubmit } = props;
  const classes = useStyles();

  useEffect(() => {
    initialize(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <form onSubmit={handleSubmit}>
      <Field validate={[requireField, maxLengthTextOrLink, minLengthField]} className={classes.input} name="img" label="Image" component={renderTextField}></Field>
      <Field validate={[requireField, maxLengthTitle, minLengthField]} className={classes.input} name="title" label="Title" component={renderTextField}></Field>
      <Field validate={[requireField, isNumber, maxPrice, minPrice]} className={classes.input} name="price" label="Price" component={renderTextField}></Field>
      <Field validate={[requireField, maxLengthTextOrLink, minLengthField]} className={classes.input} name="description" label="Description" component={renderTextField}></Field>

      <Button className={classes.button} variant="contained" type="submit">Update</Button>
      <Button className={classes.button} variant="contained" onClick={remove} >Delete</Button>
    </form>
  );
}

const ReduxCardForm = reduxForm<{}, iProps>({
  form: 'update',
})(CardForm);

export default ReduxCardForm;