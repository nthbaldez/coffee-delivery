<h1 align="center" style="font-weight: bold;">Coffee Delivery</h1>

<p align="center">
 <a href="#tech">Technologies</a> • 
 <a href="#started">Getting Started</a> • 
  <a href="#colab">Collaborators</a> •
 <a href="#contribute">Contribute</a>
</p>

<p align="center">
  <b>Coffee Delivery E-commerce</b>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
  <img src="/public/homepage.png" alt="Homepage" width="400px">
</p>
<p align="center">
  <img src="/public/listproducts.png" alt="Lista de produtos" width="400px">
</p>
<p align="center">
  <img src="/public/checkout.png" alt="Preencher formulário de finalização da compra" width="400px">
</p>

<h2 id="technologies">💻 Technologies</h2>

- React
- Typescript
- Styled-components
- Hooks
- Context API

<h2>Principais Features</h2>
<p>
  As principais features do projeto são:
</p>

<ul>
  <li>Hook useCart: Hook para adicionar, remover ou atualizar a quantidade de produtos no carrinho, com isso, podem ser acessada as informações na página de finalização da compra</li>
  <li>Hook usePayment: Hook utilizado para lidar com as informações de endereço e forma de pagamento na página Success.</li>
  <li>LocalStorage: no hook useCart foi implementado uma forma de salvar os itens do carrinho no localstorage</li>
  <li>JSON Server e consumo da API: Foi criada uma Fake API que é consumida usando a biblioteca Axios. A API é chamada na página Home, no componente ProductsContainer. Dessa forma, a API é consumida de forma mais performática dentro da HomePage.</li>
</ul>

<h2 id="started">🚀 Getting started</h2>

<h3>Prerequisites</h3>

Here are the prerequisites to run this project:

- [NodeJS](https://nodejs.org/en)
- [Git](https://git-scm.com/downloads)

<h3>Cloning</h3>

How to clone this project

```bash
git clone https://github.com/nthbaldez/coffee-delivery.git
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm install
npm run dev
```

How to start the api for the project

```bash
cd api
npm start
```

<h2 id="colab">🤝 Collaborators</h2>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/nthbaldez" width="100px;" alt="Nathan Baldez Developer Profile"/><br>
        <sub>
          <b>Nathan Baldez</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribute</h2>

Here you will explain how other developers can contribute to your project. For example, explaining how can create their branches, which patterns to follow and how to open an pull request

1. `git clone https://github.com/nthbaldez/petshop-e_commerce.git`
2. `git checkout -b feature/NAME`
3. Follow commit patterns
4. Open a Pull Request explaining the problem solved or feature made, if exists, append screenshot of visual modifications and wait for the review!

<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
