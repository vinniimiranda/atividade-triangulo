module.exports = function tipoTriangulo(lado1, lado2, lado3) {

  if (lado1 <= 0 || lado2 <=0 || lado3 <= 0) {
    return false
  }

  if (lado1 === lado2) {
    if (lado1 === lado3) {
      return 'Equilatero'
    } else {
      return 'Isoceles'
    }
  } else if (lado1 === lado3) {
    return 'Isoceles'

  } else if (lado2 === lado3) {
    return 'Isoceles'
  }
  else {
    return 'Esclaeno'
  }

}
