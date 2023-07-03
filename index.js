function gerarCPF(digito1, digito2) {
  let cpf = digito1.toString().padStart(9, '0') + digito2; // Concatenar os dígitos verificadores

  // Calcular o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += cpf[i] * (10 - i);
  }
  let resto = soma % 11;
  cpf += (resto < 2) ? 0 : 11 - resto;

  // Calcular o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += cpf[i] * (11 - i);
  }
  resto = soma % 11;
  cpf += (resto < 2) ? 0 : 11 - resto;

  return cpf;
}

// Verificar se foram fornecidos os dígitos verificadores
if (process.argv.length !== 4) {
  console.log('Digite os dois dígitos verificadores como parâmetros.');
  console.log('Exemplo de uso: node script.js <digito1> <digito2>');
  process.exit(1);
}

// Pegar os dígitos verificadores a partir dos parâmetros
let digito1 = parseInt(process.argv[2]);
let digito2 = parseInt(process.argv[3]);

console.log("Digito 1", digito1);
console.log("Digito 2", digito2);

// Verificar se os dígitos verificadores são válidos
if (isNaN(digito1) || isNaN(digito2)) {
  console.log('Os dígitos verificadores devem ser números.');
  process.exit(1);
}
let cpf = gerarCPF(digito1, digito2);
console.log('CPF gerado: ' + cpf);