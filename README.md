# Amigo Secreto - Sorteio

Este projeto permite adicionar nomes à lista de amigos, realizar o sorteio do amigo secreto e exibir os resultados. Ele utiliza JavaScript para gerenciar a lógica de adição de amigos e sorteio.

## Funcionalidades

1. **Adicionar Amigo:**
   - O nome de um amigo pode ser adicionado à lista através de um campo de entrada.
   - Se o campo de entrada estiver vazio, será exibido um alerta.
   - Não é permitido adicionar o mesmo nome mais de uma vez. Caso isso aconteça, será exibido um alerta.

2. **Listar Amigos:**
   - Todos os amigos adicionados são exibidos em uma lista na página.

3. **Sorteio do Amigo Secreto:**
   - O sorteio seleciona aleatoriamente um amigo da lista e exibe o nome do sorteado.
   - Se não houver amigos na lista, será exibido um alerta informando que a lista está vazia.

4. **Limpeza do Campo:**
   - Após adicionar um amigo, o campo de entrada é limpo automaticamente.

## Como Usar

1. **Adicione amigos:**
   - Digite o nome de um amigo no campo de entrada e clique no botão para adicionar.

2. **Sorteie um amigo secreto:**
   - Após adicionar pelo menos um amigo, clique no botão de sorteio para ver o amigo secreto selecionado aleatoriamente.

## Estrutura do Código

- **Funções Principais:**
   - `adicionarAmigo()`: Adiciona um amigo à lista e valida o nome.
   - `listaDeAmigo()`: Exibe todos os amigos na lista.
   - `limparCampo()`: Limpa o campo de entrada após adicionar um amigo.
   - `sortearAmigo()`: Realiza o sorteio de um amigo secreto aleatório.

## Exemplo de Uso

1. **Adicionar amigos**:
   - Preencha o campo com "João", "Maria", "Carlos" e clique em adicionar.
   
2. **Sorteio**:
   - Após adicionar os amigos, clique em "Sortear" para ver o amigo secreto escolhido.

## Considerações

- O código deve ser executado em um ambiente que suporte JavaScript, como um navegador web.
- A lista de amigos é gerenciada apenas enquanto a página estiver aberta. Se a página for recarregada, a lista será apagada.
