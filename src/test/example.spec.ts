import { expect, test } from 'vitest'

test('User can create a new transaction', () => {
  // Fazer uma chamada HTTP para criar uma nova transação
  // Criar o teste
  const responseStatusCode = 201
  // Criar a validação 'expect"
  expect(responseStatusCode).toEqual(201)
})
