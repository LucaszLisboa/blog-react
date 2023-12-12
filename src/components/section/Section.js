import './Section.css'

const bd = {
  posts:[
      {id: 0, titulo: "Esportes", descricao: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
      {id: 1, titulo: "Sistema IFPR", descricao: "Sistema de gerenciamento de alunos do IFPR."},
      {id: 2, titulo: "Cadastrar", descricao: "Cadastrar novos alunos no sistema."},
      {id: 3, titulo: "Alunos", descricao: "Alunos cadastrados no sistema."}

  ]
}

function Section(props){
  return(
    <section>
      <h2>{bd.posts[props.id].titulo}</h2>
      <article>
        <p>{bd.posts[props.id].descricao}</p>
      </article>
    </section>
  )
}

export default Section;