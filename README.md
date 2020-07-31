# Project Manager with Sequelize and PostgreSQL

A project manager to organize all the projects of a user, being able to add, retrieve, change and remove. Just as it is also possible to add and remove collaborators to projects

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

Now the project is ready to be used from the base route:

[http://localhost:3000](http://localhost:3000)


## Routes

### Authentication

**POST** /login

**GET** /logout

### User

**GET** /user/list

**GET** /user

**POST** /user/register

**PUT** /user/update

**DELETE** /user/delete

### Project

**GET** /project/list

**GET** /project/

**POST** /project/register

**PUT** /projecter/update

**DELETE** /project/delete


## License

MIT
