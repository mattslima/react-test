import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Section = () => (
  <section>
    <h2>iniciar sessão </h2>
    <form>
      <div>
        <TextField
          id="outlined-basic"
          label="Login"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="senha"
          margin="normal"
          variant="outlined"
        />
      </div>
    </form>
    <Button variant="contained">login</Button>
  </section>
);
export default Section;
