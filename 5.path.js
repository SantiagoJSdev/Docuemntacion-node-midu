const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Obtener el nombre del fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)
//Obtener el nombre del fichero sin la extension
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//obtener la extension
const extension = path.extname('my.super.image.jpg')
console.log(extension)