import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
  let [nome, setNome] = useState("");
  let [sobrenome, setSobrenome] = useState("");
  let [cpf, setCpf] = useState("");
  let [promocoes, setPromocoes] = useState(true);
  let [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        onChange={(evento) => {
          setNome(evento.target.value);
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
        onChange={(evento) => {
          setCpf(evento.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cpf}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(evento) => setPromocoes(evento.target.checked)}
            name="Promoções"
            checked={promocoes}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(evento) => setNovidades(evento.target.checked)}
            name="Novidades"
            checked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
