# Álbum de Figurinhas da Copa do Mundo

Este projeto é uma atividade prática para desenvolver a interface de um aplicativo de álbum de figurinhas da Copa do Mundo, utilizando Vue.js e Ionic Framework. O foco está na arquitetura, componentização, uso de composables e apresentação visual, sem persistência de dados externa (todos os dados são mantidos em vetores na memória).

## Aluno

- **Nome Completo:** Elisa Rossetti
- **Nome do Curso:** Informatica
- **Unidade Curricular:** Codificar aplicações para dispositivos móveis

## Conteúdo do Repositório

O repositório contém a implementação de um aplicativo de álbum de figurinhas com as seguintes funcionalidades:

- **Autenticação:** Telas de login, cadastro e recuperação de senha com validação básica de campos.
- **Navegação:** Utilização de `ion-tabs` para navegação principal entre as telas do álbum, coleção e perfil.
- **Gestão de Figurinhas:** Visualização de figurinhas, marcação de figurinhas como coletadas/pendentes.
- **Pesquisa e Filtros:** Funcionalidades de pesquisa por nome do jogador/seleção e filtros por status (todas, coletadas, pendentes).
- **Componentização:** Componentes reutilizáveis para formulários de autenticação (`LoginForm`, `RegisterForm`, `ResetPasswordForm`), exibição de figurinhas (`StickerCard`, `StickerList`) e cabeçalho (`AppHeader`).
- **Composables:** Implementação de `useAuth` para gerenciar o estado de autenticação e `useAlbum` para gerenciar a coleção de figurinhas e suas operações.
- **Interface do Usuário:** Utilização de componentes do Ionic para uma interface mobile amigável, incluindo `ion-card`, `ion-item`, `ion-input`, `ion-button`, `ion-select`, `ion-searchbar`, `ion-progress-bar`, entre outros.

## Como Rodar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [URL do seu repositório GitHub]
    cd album-copa
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível) no seu navegador. Para simular um ambiente mobile, use as ferramentas de desenvolvedor do navegador.

## Estrutura de Pastas

-   `src/components/`: Componentes Vue reutilizáveis.
-   `src/composables/`: Funções composable para lógica de negócio e estado reativo.
-   `src/views/`: Telas principais do aplicativo.
-   `src/data/`: Dados mockados para as figurinhas.
-   `src/router/`: Configuração das rotas do Vue Router.

## Observações

-   A autenticação e a gestão de figurinhas são simuladas em memória e não persistem após o recarregamento da página.
-   As imagens das figurinhas são placeholders (`https://via.placeholder.com/150`).
