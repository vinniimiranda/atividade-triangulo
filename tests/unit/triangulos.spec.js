const tipoTriangulo = require('../../src/tipoTriangulo')

describe('Triangulo', () => {

  it('Deve retonar false quando um ou mais lados forem igual ou menor que 0 (zero)', () => {
    const resultado = tipoTriangulo(0,1,1)
    expect(resultado).toBe(false)
  })

  describe('Equilatero', () => {
    it('Deve retornar um triangulo Equilatero', () => {
      const resultado = tipoTriangulo(1, 1, 1)
      expect(resultado).toBe('Equilatero')
    })
    it('Não deve retornar um triangulo Equilatero', () => {
      const resultado = tipoTriangulo(1, 1, 2)
      expect(resultado).not.toBe('Equilatero')
    })
  })

  describe('Isoceles', () => {
    it('Deve retornar um triangulo Isoceles', () => {
      const resultado = tipoTriangulo(1, 3, 1)
      expect(resultado).toBe('Isoceles')
    })
    it('Não deve retornar um triangulo Isoceles', () => {
      const resultado = tipoTriangulo(1, 1, 1)
      expect(resultado).not.toBe('Isoceles')
    })
  })

  describe('Esclaeno', () => {
    it('Deve retornar um triangulo Esclaeno', () => {
      const resultado = tipoTriangulo(1, 3, 4)
      expect(resultado).toBe('Esclaeno')
    })
    it('Não deve retornar um triangulo Esclaeno', () => {
      const resultado = tipoTriangulo(1, 3, 3)
      expect(resultado).not.toBe('Esclaeno')
    })
  })
})
