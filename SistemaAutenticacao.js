//Ser auteticavel significa ter o metodo "autenticar"
export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.EhAltenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false;
    }

    static EhAltenticavel (autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }

}