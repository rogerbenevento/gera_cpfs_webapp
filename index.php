<?php
function gerarCPF() {
    $n1 = rand(0, 9);
    $n2 = rand(0, 9);
    $n3 = rand(0, 9);
    $n4 = rand(0, 9);
    $n5 = rand(0, 9);
    $n6 = rand(0, 9);
    $n7 = rand(0, 9);
    $n8 = rand(0, 9);
    $n9 = rand(0, 9);
    
    $digitos = $n1.$n2.$n3.$n4.$n5.$n6.$n7.$n8.$n9;
    
    $soma1 = 0;
    $soma2 = 0;
    
    for ($i = 0; $i < 9; $i++) {
        $soma1 += $digitos[$i] * (10 - $i);
        $soma2 += $digitos[$i] * (11 - $i);
    }
    
    $resto1 = $soma1 % 11;
    $digito1 = ($resto1 < 2) ? 0 : 11 - $resto1;
    
    $soma2 += $digito1 * 2;
    $resto2 = $soma2 % 11;
    $digito2 = ($resto2 < 2) ? 0 : 11 - $resto2;
    
    return $digitos.$digito1.$digito2;

    
}

$gerado = false;
while (!$gerado) {
    $cpf = gerarCPF();
    $digitos = substr($cpf, 9, 2);
    if (in_array($digitos, ['40', '11'])) {
        $gerado = true;
        echo $cpf;
    }
}

