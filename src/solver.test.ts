import solver from './solver';

describe("solver", () => {
  it("should solve fizzbuzz", () => {
    expect(solver(3)).toEqual('Fizz')
    expect(solver(5)).toEqual('Buzz')
    expect(solver(15)).toEqual('FizzBuzz')
    expect(solver(22)).toEqual(22)
  })
})