import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";

const Home = () => (
  <section>
    <h2>iniciar sessão </h2>
    <form method="post" onSubmit={() => this._sendForm()}>
      <div>
        <TextField
          id="email"
          label="Login"
          margin="normal"
          variant="outlined"
          type="email"
        />
      </div>
      <div>
        <TextField
          id="senha"
          label="senha"
          margin="normal"
          variant="outlined"
          type="password"
        />
      </div>
    </form>
    <Button type="submit" className="botao" variant="contained">
      login
    </Button>
  </section>
);

export default withRouter(Home);
