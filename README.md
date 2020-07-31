# Project Manager with Sequelize and PostgreSQL

A project manager to organize all the projects of a user and also all users related to each project.

## Setup

To execute the project, it will be necessary to install the dependencies by typing the following command in the terminal:

```bash
yarn install
```

Then create a file called **.env** and copy the contents of the file **.env.exemple** to it, which already exists at the root of the project. After that, fill in the fields with your credentials.

## Use

To execute the project, type the following command in the terminal:

```bash
yarn start
```

## Routes

### Authentication

#### POST [http://localhost:3000/login](http://localhost:3000/login)

#### GET [http://localhost:3000/logout](http://localhost:3000/login)

### User

#### GET [http://localhost:3000/user/list](http://localhost:3000/user/list)

#### GET [http://localhost:3000/user/:id](http://localhost:3000/user/)

#### POST [http://localhost:3000/user/register](http://localhost:3000/user/register)

#### PUT [http://localhost:3000/user/update/:id](http://localhost:3000/user/update)

#### DELETE [http://localhost:3000/user/delete/:id](http://localhost:3000/user/delete)

### Project

#### GET [http://localhost:3000/project/list](http://localhost:3000/project/list)

#### GET [http://localhost:3000/project/:id](http://localhost:3000/project/)

#### POST [http://localhost:3000/project/register](http://localhost:3000/project/register)

#### PUT [http://localhost:3000/project/update/:id](http://localhost:3000/usprojecter/update)

#### DELETE [http://localhost:3000/project/delete/:id](http://localhost:3000/project/delete)


## License

MIT
