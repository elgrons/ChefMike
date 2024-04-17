import { React } from "react";
import "./BookingInfo.scss";
import { Grid } from "@mui/material";

export const BookingInfo = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item m={6}>
          <h1>
            Booking with me includes:
            <ul>
              <li>Dinner for up to 16</li>
              <li>Specialized menus coordinated in advance</li>
              <li>I cook and clean!</li>
            </ul>
          </h1>
          <br></br>
          <h1>Bartender/server coordinated upon request.</h1>
          <br></br>
          <h1>Location:</h1>
          <h1>
            Specializing in the Oregon Coast, Mt. Hood, and Portland-metro areas, but will travel anywhere in the PNW.
          </h1>
          <h1>
            Can discuss further travel and expenses per individual event request.
          </h1>
          <br></br>
          <h1>Cost:</h1>
          <h1>Minimum cost of $ per person.</h1>
          <h1>Minimum group size of x people.</h1>
          <br></br>
          <h1>Call or Text directly to book.</h1>
        </Grid>
      </Grid>
    </>
  );
};
