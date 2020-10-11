const  helper  =  require ( '../helpers/helper' ) ;

const  tarefa  =  [
  { 
    id : 1 , 
    titulo : "Ler um livro" ,
    descricao : "Preciso ler um livro após acordar" ,
    prazo : "28/10/2020" , 
    responsavel : 'Amanda' , 
    dataCriacao : helper . novaData ( )
  } ,
  { 
    id : 2 , 
    titulo : "Estudar Biologia" ,
    descricao : "Estudar biologia para o vestibular" ,
    prazo : "18/12/2020" , 
    responsavel : 'Raquel' , 
    dataCriacao : helper . novaData ( )
  } ,
  
] ;

módulo . exportações  =  tarefa ;

