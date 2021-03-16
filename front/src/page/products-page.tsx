import React, { useState } from "react";

import ProductCard from "../components/card";
import { RootStateOrAny, useSelector } from "react-redux";
import { iProduct } from "../utils/type";
import Grid from '@material-ui/core/Grid';

const style = {
  borderTop: "solid 1px rgba(0,0,0,0.2)",
  width: "100%"
}

const ProductPage: React.FC = () => {
  const { productes } = useSelector((state: RootStateOrAny) => state);

  const [editId, setEditId] = useState<string>('');

  return (
    <>
      <h2>All Hot-dogs</h2>
      <Grid
        style={style}
        container
        justify="flex-start"
        alignItems="flex-start"
        spacing={2}>
        {productes.map((el: iProduct) => {
          return (
            <Grid item key={el.id}>
              <ProductCard editId={editId} editEvent={(id: string) => setEditId(id)} data={el} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}


export default ProductPage;

