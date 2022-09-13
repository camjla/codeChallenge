const alunos = [
  {
    nome: 'Camila',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Jimin',
    nota: 9,
    turma: '1B'
  },
  {
    nome: 'Samuel',
    nota: 6,
    turma: '2C'
  },
  {
    nome: 'Fernanda',
    nota: 3,
    turma: '1B'
  },
  {
    nome: 'Jungkook',
    nota: 10,
    turma: '1B'
  },
  {
    nome: 'Julia',
    nota: 7,
    turma: '1B'
  },
  {
    nome: 'Giovanna',
    nota: 2,
    turma: '1B'
  },

]
function alunosAprovados(alunos, media) {
  let aprovados = []

  for (let i = 0; i < alunos.length; i++) {
    let { nota, nome } = alunos[i]

    // usado:object destructuring  é tipo o nome, nota e turma

    if (nota >= media) {
      aprovados.push(nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 6))
