

const DADOS = '_DADOS';

export function ErroValidacao(errors){
    this.errors = errors;
}
export default class cadastroService{
    validar = (dado) => {
        const errors = []
        if(!dado.id){
            errors.push('Campo banco obrigatório!')
        }
        if(!dado.banco){
            errors.push('Campo banco obrigatório!')
        }
       
        if(!dado.tipo){
            errors.push('Campo tipo obrigatório!')
        }
        if(!dado.data){
            errors.push('Campo data obrigatório!')
        }
        if(!dado.valor || dado.valor <= 0){
            errors.push('O campo deve ser maior que zero!')
        }
        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }

  

    getDados = () => {
        const dados = localStorage.getItem(DADOS)
        return JSON.parse(dados)
    }
    obterIndex = (id) => {
        let index = null;
        this.getDados().forEach( (dado, i) => {
            if(dado.id === id){
                index = i;
            }
        })
        return index;
    }
    delete = (id) => {
        const index = this.obterIndex(id)
        if(index !== null){
            const dados = this.getDados()
            dados.splice(index, 1)
            localStorage.setItem(DADOS, JSON.stringify(dados) )
            return dados
        }
    }
   
    salvar = (dado) => {
        this.validar(dado)

       let dados = localStorage.getItem(DADOS);
       
       if(!dados) {
           dados = [];
       }else{
           dados = JSON.parse(dados)
       }

       dados.push(dado);

       localStorage.setItem(DADOS, JSON.stringify(dados) )
    }
}