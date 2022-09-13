function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value == 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const usuarios = new Map()

usuarios.set('camila', 'Admin')
usuarios.set('Bruna', 'User')
usuarios.set('karen', 'Admin')

console.log(getAdmins(usuarios))
