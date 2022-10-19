import React from "react";

const Usuario =(props)=>{
const informacoesDoUsuario=props.Informacoes.map((informacao)=>{
    return  <div className="box-pagina-principal" onClick={props.reproduzir}>
    {informacao.image}
     <h4>{informacao.titulo}</h4>
   </div>
})

    return(
        <section className="painel-de-videos">
            {informacoesDoUsuario}
        
       
      </section>

    )
}

export default Usuario