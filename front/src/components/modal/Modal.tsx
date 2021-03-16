import React from "react";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


import ReduxFormModal from "../modal-form";

import { useDispatch } from "react-redux";
import { request } from "../../api";
import { addProduct } from "../../actions";

import { iProduct } from "../../utils/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: 5
    },
  }),
);


export interface iProps {
  handleClose: () => void
}

const ModalBody: React.FC<iProps> = ({ handleClose }) => {
  const dispatch = useDispatch();

  const [modalStyle] = React.useState({
    width: 300,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  });

  const classes = useStyles();

  const add = (body: iProduct) => {
    request("POST", body)
      .then(data => {
        dispatch(addProduct(data));
        handleClose();
      }).catch(err => {
        alert(err.message || "Server error");
      })
  }

  return (
    <div style={modalStyle} className={classes.paper}>
      <Box textAlign="center">
        <h2 id="simple-modal-title" >Add new hot-dog</h2>
      </Box>
      <ReduxFormModal onSubmit={add} handleClose={handleClose} />
    </div>
  );
}

export default ModalBody;