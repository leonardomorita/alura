export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (!SistemaAutenticacao.ehAutenticavel(autenticavel)) return false;

        return autenticavel.autenticar(senha);
    }

    /* Verificar se a instância tem o método autenticar */
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}