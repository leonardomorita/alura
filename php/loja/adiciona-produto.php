<?php include('./templates/cabecalho.php'); ?>

<?php
    $produto = $_GET['nome'];
    $preco = $_GET['preco'];

    // Conectar ao Mysql
    $conexao = mysqli_connect('localhost', 'root', '', 'loja');

    $sqlInserir = "INSERT INTO produtos (nome, preco) VALUES ('{$produto}', {$preco});";
    mysqli_query($conexao, $sqlInserir);

    mysqli_close($conexao);
?>

<h2>Produto <?= $produto ?> adicionado com sucesso!</h2>
<h3>Preço: <?= $preco ?></h3>

<?php include('./templates/rodape.php'); ?>