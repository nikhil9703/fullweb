import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const Tiles = () => {
  const tilesData = [
    { title: "Total Blogs", value: 3 },
    { title: "Employees", value: 5 },
  ];

  return (
    <Grid container spacing={2}>
      {tilesData.map((tile, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card sx={{ backgroundColor: "#e0f7fa", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {tile.title}
              </Typography>
              <Typography variant="h4" component="div">
                {tile.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tiles;
