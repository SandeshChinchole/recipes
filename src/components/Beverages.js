import React from "react";
import Grid from '@mui/material/Grid';
import Card from "./Card";

const Beverages = ({recipes}) => {
    return(
        <Grid container spacing={1} className="gridContainer">
        {recipes.map((item, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={i}>
                    <Card item={item} key={item.id} />
                </Grid>
                )
            )
        }
        </Grid>
    );
};

export default Beverages;