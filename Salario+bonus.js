const input = require("fs").readFileSync("stdin","utf-8") 
const funcionario = input.split("\r\n")

const nome = (funcionario[0])
const salario = Number(funcionario[1])
const vendas = Number(funcionario[2])

comissão ((15/100)*vendas)

console.log(`Funcionario:${nome}\r\nBonus:${((15/100)*vendas).toFixed(2)}\r\nSalario Total:${(comissao+salario).toFixed(2)}`}
