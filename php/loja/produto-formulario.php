<?php include('./templates/cabecalho.php'); ?>

<h1 class="mb-2 text-center">Formulário de cadastro</h1>

<form action="./adiciona-produto.php">
    <div class="row">
        <div class="col-12">
            <div class="row mb-2">
                <div class="col-3">
                    <label for="nome">Nome</label>
                </div>

                <div class="col-9">
                    <input type="text" name="nome" id="nome" required autofocus class="form-control">
                </div>
            </div>

            <div class="row mb-5">
                <div class="col-3">
                    <label for="preco">Preço</label>
                </div>

                <div class="col-9">
                    <input type="number" name="preco" id="preco" min='0.01' step="0.01" required class="form-control">
                </div>
            </div>

            <div class="row">
                <div class="col-5">
                    <input type="submit" value="Salvar" class="btn btn-primary btn-block">
                </div>
            </div>
        </div>
    </div>
</form>

<?php include('./templates/rodape.php'); ?>