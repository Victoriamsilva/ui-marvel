# ui-marvel

Este projeto é uma interface de usuário para acessar informações sobre personagens da Marvel, incluindo suas aparições em filmes e quadrinhos. Ele fornece recursos como pesquisa de personagens por nome, lista paginada de todos os personagens e visualizações detalhadas de personagens individuais.

## Preview do projeto
![Listagem de personagens](https://github.com/Victoriamsilva/ui-marvel/assets/96841171/35a8506a-8752-438a-a517-a0db7837e841)
![Listagem de personagens](https://github.com/Victoriamsilva/ui-marvel/assets/96841171/71a7bf92-aab2-47ca-94a4-07daf6e87708)

## Features

- **Pesquisar por um personagem**: O usuário pode pesquisar por um personagem pelo nome.
- **Listagem de todos os personagens**: O usuário poderá visualizar todos os personagens de forma paginada e caso perca a conexão com a internet poderá visualizar a última busca.
- **Detalhe de personagem**: O usuário pode explorar os detalhes de cada personagem, incluindo suas participações em filmes e revistas. Além disso, se perder a conexão com a internet, poderão acessar o último personagem visualizado.

## Instalação

Para ter uma cópia do projeto rodando na sua máquina, siga estas etapas:

1. Clone este repositório em sua máquina local
2. Navegue até o diretório do projeto: `cd ui-marvel`
3. Instale dependências executando: `npm install`

## Utilização

Para executar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

O projeto estará disponível para acessar em [http://localhost:5173](http://localhost:5173).

Para rodar testes, execute o seguinte comando:

```bash
npm run test
```

## Backend API

Este projeto utiliza a [API Marvel](https://developer.marvel.com/), uma API pública fornecida pela Marvel para acessar informações dos personagens.

## Folder Structure

```
src/
│   ├── assets/             # Arquivos estáticos como imagens, ícones e fontes
│   ├── components/         # Componentes reutilizáveis     
│   ├── hooks/              # Contém hooks customizados para reutilização de lógica
│   ├── interfaces/         # Define interfaces TypeScript para garantir tipagem consistente
│   ├── pages/              # Contém todas as páginas da aplicação
│   │   ├── private/        # Páginas acessíveis apenas após autenticação
│   │   └── public/         # Páginas acessíveis sem autenticação
│   ├── routes/
│   │   └── routes.tsx      # Rotas da aplicação
│   ├── services/           # Qualquer serviço que a aplicação possa consumir
│   │   ├── api/            # Arquivos relacionados à busca de dados de um servidor
│   │   └── state/          # Gerenciamento global de estados da aplicação (state, actions, reducers, slices)
│   ├── styles/             # Contém arquivos de estilo da aplicação
│   │   ├── global.scss     # Estilos globais aplicados em toda a aplicação
│   │   └── typography.scss # Estilos para a tipografia da aplicação
│   ├── utils/              # Pequenas funções reutilizáveis
│   ├── App.tsx             # Componente principal da aplicação
│   ├── main.tsx            # Ponto de entrada da aplicação onde é inicializado o ReactDOM
│   ...
```

## Construído com

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SASS](https://sass-lang.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React paginate](https://www.npmjs.com/package/react-paginate)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Lucide](https://lucide.dev/)
- [cryptojs](https://www.npmjs.com/package/crypto-js)
- [axios](https://axios-http.com/ptbr/docs/intro)

## Autoria

- [Victoria Marques](https://github.com/Victoriamsilva)
