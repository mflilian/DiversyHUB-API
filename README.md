<h1 align="center">
  <img src="public/images/DiversyHUB.JPG" alt="duas pessoas segurando uma bandeira, duas mulheres abraçadas, logomarca DiversyHUB aparece acima da ilustração" width="500">
<p align="center">DiversyHUB - Diversidade dentro do mercado de trabalho<p>
</h1>

#  {reprograma} Projeto Final | :rainbow:
Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/) em parceria com o [projeto MINAs do Porto Digital](https://www.portodigital.org/capital-humano/iniciativas-para-a-diversidade/mulheres-em-inovacao-negocios-e-artes-minas)

<p align="center">

Aplicação disponível [aqui](https://diversyhub.herokuapp.com/) :purple_heart: 
<p>

## Objetivo

De acordo com a Antra (Associação Nacional de Travestis e Transexuais), 87% da população trans acaba recorrendo à prostituição por falta de oportunidade no mercado de trabalho. E um dos grandes fatores disso é a evasão escolar e, consequentemente, a falta de capacitação. Visando esses fatores, a DiversyHUB foi criada objetivando diminuir a disparidade da não inserção dessa comunidade no mercado de trabalho. Para isso, foi construída uma *API* com banco de dados de mulheres transexuais e travestis que estão desempregades, possibilitando que essas pessoas se cadastrem para ficarem visíveis aos empregadores e, do outro lado, permitirá que o recrutador busque candidates adequadades ao perfil esperado para as vagas ofertadas em suas empresas.  Além disso, a DiversyHUB auxiliará na capacitação das mesmas, redirecionando-es para cursos/treinamentos online que elu possa se inscrever e melhor qualificar-se. 


### Funcionalidades:

- [x] O schema das candidatas deve possuir os seguintes campos: id (autogerado), nome, telefone, e-mail, data de nascimento, local de nascimento, idiomas, escolaridade, objetivo e resumo profissional;
- [x] A API deve permitir o cadastro do currículo da candidata;
- [x] A API deve permitir a visualização dos currículos cadastrados;
- [x] A API deve permitir alterações nos currículos;
- [x] A API deve permitir a exclusão de currículos das candidatas do banco de dados.
- [x] Criação de usuário e login para a usuária com acesso sem restrição;
- [ ] Criação de usuário e login para recrutador, com restrição de acesso (somente visualização e seleção).

### Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/mflilian/DiversyHUB-API

# Entrar na pasta do repositório
$ cd DiversyHUB-API

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start

```
Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.


#### Tecnologias e pacotes utilizados
- Node.js
- MongoDB
- Git
- express
- nodemon
- dotenv-safe
- mongoose
- bcrypt
- jsonwebtoken


#### Rotas/Endpoints

| Rotas  Candidates                        |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/                                     | Rota inicial da API                                |
| GET/candidates/buscar/:id                | Listar candidates pelo ID                          |
| POST/candidates/adicionar                | Cadastrar novo currículo                           |
| POST/candidates/login                    | Login candidate                                    |
| PATCH/candidates/alterar/:id             | Alterar dados currículo                            |
| DELETE/candidates/deletar/:id            | Excluir o currículo                                |


| Rotas Empresas                           |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/empresas                             | Acessar candidates cadastrades                     |
| GET/empresas/candidate/:id               | Acessar candidates pelo ID                         |
| POST/empresas/adicionar                  | Cadastrar empresa                                  |
| POST/empresas/login                      | Login empresa                                      |
| DELETE/empresas                          | Excluir empresa cadastrada                         |


| Rotas Cursos                             |                                                    |
| ---------------------------------------  | -------------------------------------------------- | 
| GET/cursos                               | Acessar aos cursos disponíveis                     |
| GET/cursos/id/:id                        | Acessar aos cursos pelo ID                         |
| GET/cursos/curso/:tipo                   | Acessar aos cursos pelo tipo                       |
| GET/cursos/nome/:nome                    | Acessar aos cursos pelo nome                       |


### Contribua para o nosso projeto!

1. Faça o fork do projeto;
2. Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`
3. Commit as alterações feitas e abra um pull request


------------



<p align="center">
Desenvolvido com :purple_heart:  
</p>


