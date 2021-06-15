import FormularioCadastro from './components/FormularioCadastro';
import './App.css';

import { Container, Typography } from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviar} />
    </Container>
  );
}

function aoEnviar(dados) {
  console.log(dados);
}

export default App;