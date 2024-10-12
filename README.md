# Aplicativo React para Consumo da Stephen King API
Trabalho desenvolvimento por João Carlos F. de Farias e Núbia Gonçalves dos Santos Tirabassi para contemplar a discipllina de desenvolvimento mobile II - IPOG.

# Visão Geral
O objetivo deste projeto é desenvolver um aplicativo React que consuma a Stephen King API, permitindo que os usuários visualizem uma lista de livros escritos por Stephen King e acessem detalhes sobre deles. O aplicativo tem uma interface simples para listagem e exibição dos livros ao clicar em título.

# Funcionalidades
Listagem de Livros: O aplicativo fará uma requisição para a API para obter uma lista dos livros disponíveis. Os dados serão exibidos em uma lista.

Detalhes do Livro: Ao clicar em um título, o usuário será redirecionado para uma página de detalhes, onde informações adicionais, como sinopse, ano de publicação e gênero, serão exibidas.

# Tecnologias Utilizadas
React/React Native: Para construção da interface do usuário.
Axios: Para realizar as requisições HTTP à API.
React Router: Para navegação entre a lista de livros e a página de detalhes.
CSS/Styled Components: Para estilização do aplicativo.

# Fluxo de Trabalho
O aplicativo inicia na página principal (Home.tsx), onde a lista de livros é carregada a partir da Stephen King API.
O usuário vê a lista de livros e pode clicar em qualquer título.
O aplicativo redireciona o usuário para a página de detalhes (Details.tsx), onde as informações adicionais sobre o livro são exibidas.
O usuário pode retornar à lista de livros para continuar navegando.

# Para as requisições
Obter lista de livros: GET https://stephen-king-api.onrender.com/api/books
Obter detalhes de um livro específico: GET https://stephen-king-api.onrender.com/api/book/{id}
Obter lista de livros: GET https://stephen-king-api.onrender.com/api/villains
Obter detalhes de um livro específico: GET https://stephen-king-api.onrender.com/api/villain/{id}
