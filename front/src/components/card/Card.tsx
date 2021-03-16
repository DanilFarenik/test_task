import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from "react-redux";
import { request } from "../../api";
import { updateProduct, deleteProduct } from "../../actions";


import CardForm from "../card-form";
import { iProduct } from "../../utils/type";

export const useStyles = makeStyles({
  root: {
    width: 300,
    borderRadius: 0,
    backgroundColor: "#fafafa",
    boxShadow: "none",
    margin: 10,
    padding: 0
  },
  button: {
    width: "100%",
    color: "#333333",
    backgroundColor: "#e5e5e5",
    textTransform: "none",
    borderRadius: "0px"
  }
});

interface iProps {
  data: iProduct,
  editId: string,
  editEvent: (id: string) => void
}


const ProductCard: React.FC<iProps> = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data: { id, description, title, price, img }, editId, editEvent } = props;

  const update = (body: iProduct) => {
    request("PUT", body, id)
      .then(data => {
        dispatch(updateProduct(data));
        editEvent("");
      }).catch(err => {
        console.log(err);

        alert(err.message || "Server error");
      })
  }


  const remove = () => {
    request("DELETE", null, id)
      .then(data => {
        dispatch(deleteProduct(data));
        editEvent("");
      }).catch(err => {
        alert(err.message || "Server error");
      })
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={img}
        title="Contemplative Reptile"
      />
      {editId !== String(id) ?
        <>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {price}$
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => editEvent(String(id))} className={classes.button} size="small" color="primary">
              Edit
            </Button>
          </CardActions>
        </> :
        <CardForm remove={remove} onSubmit={update} data={props.data} />
      }
    </Card>
  )
}


export default ProductCard;