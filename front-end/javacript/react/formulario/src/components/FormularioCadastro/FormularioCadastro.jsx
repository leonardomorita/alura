import React, {useState} from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  let [nome, setNome] = useState('');
  let [sobrenome, setSobrenome] = useState('');
  return (
    <form onSubmit={(evento) => {
      evento.preventDefault();
      console.log(nome, sobrenome);
    }}>
      <TextField
        onChange={(evento) => {
          let nomeAuxiliar = evento.target.value;

          if (nomeAuxiliar.length >= 3) {
            nomeAuxiliar = nomeAuxiliar.substring(0, 3);
          }

          setNome(nomeAuxiliar);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nome}
      />
      <TextField
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        value={sobrenome}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
