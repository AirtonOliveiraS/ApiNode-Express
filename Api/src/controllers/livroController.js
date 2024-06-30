let livros = []; // Array em memória para armazenar os livros

getLivros = (req,res)=>{
    if (livros.length > 0) {
        res.json(livros);
      } else {
        res.status(404).json({ mensagem: "Nenhum livro cadastrado" });
      }

}

getLivroId = (req,res)=>{
    const livro = livros.find((livro) => livro.id == req.params.id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ mensagem: `Nenhum Livro com o ID ${req.params.id} foi encontrado` });
  }
   
}

createLivro = (req,res)=>{
    const Livro = {
        id: req.body.id,
        titulo: req.body.titulo,
        num_paginas: req.body.num_paginas,
        isbn: req.body.isbn,
        editora: req.body.editora,
        autor: req.body.autor, 
      };
      livros.push(Livro); 
      res.status(201).json(Livro); 

}

updateLivro = (req,res)=>{
    const livro = livros.find((livro) => livro.id == req.params.id);
    if (livro) {
      livro.titulo = req.body.titulo;
      livro.num_paginas = req.body.num_paginas;
      livro.isbn = req.body.isbn;
      livro.editora = req.body.editora;
      livro.autor = req.body.autor;
      res.json(livro);
    } else {
      res.status(404).json({ mensagem: "Não foi possivel editar o livro" });
    }
}

deleteLivro = (req,res)=>{
    let id = req.params.id;
    let indice = findLivroIndex(id);
    livros.splice(indice,1);
    res.status(200).send('Livroe removido com Sucesso!')
}

findLivroIndex=(id)=> {
    const indice = livros.findIndex((item)=>item.id === Number(id));
    return indice;
}





module.exports = {
    getLivros,
    getLivroId,
    createLivro,
    createLivro,
    updateLivro,
    deleteLivro
}