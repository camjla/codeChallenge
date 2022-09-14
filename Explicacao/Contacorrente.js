export class contaCorrente
{
    
    agencia;
    cliente;//tornar privado _
   

    set cliente (novoValor);{
    
        if (novoValor instanceof Cliente);
    

        this._cliente= novoValor;
    // da acesso a propriedade de negocios e  confidencializa 
    }

   get cliente ();{
    
        //´get é um acessor
        return this._cliente;
    }
    
    //colocar um valor no cliente
    _saldo=0;
     get saldo ();
    {
        return this._saldo;
    }
    
    sacar (valor)//uma operwação e metodo// se o atributo tem _ as vezes ele é PRIVADO NAO MEXA! NAO DEVE ACESSAR DE FORA DA CLASSE
    {
        if (this.#saldo >= valor) //impede a pessoa de sacar o dinheiro a mais q ela nao tem
            this.#saldo -= valor;
            return valor;//é importante e para a execução da função
//this serve para "este ""saldo"
    }
    depositar(valor)//valor é um parametro ou argumento
    {
        if (valor <=0){//ajuda na legibilidade este if
            return;  
        }
        this.saldo += valor;
    }// if nao precisa ter as chaves . mas facilita caso colocar mais coisas.
    transferir (valor,conta)
    {
        conta.cidade ="São Paulo";//adiciona dinamicamente um atributo
        const valorSacado= this.sacarr(valor);
        conta.depositar(valorSacado);
        valor = 20;
        
    }


