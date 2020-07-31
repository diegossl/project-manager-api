# Project Manager with Sequelize and PostgreSQL

A project manager to organize all the projects of a user, being able to add, retrieve, change and remove. Just as it is also possible to add and remove collaborators to projects.

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
```javascript
{
   "email": "example@gmail.com",
   "password": "example123"
}
```

**GET** /logout
```javascript
{
   "token": "authenticationToken"
}
```

### User

**GET** /user/list

```javascript
{
   "token": "authenticationToken"
}
```
**GET** /user/id

```javascript
{
   "token": "authenticationToken"
}
```

**POST** /user/register
```javascript
{
   "email": "example@gmail.com",
   "username": "Example",
   "password": "example123"
}
```
**PUT** /user/update/id
```javascript
{
   "token": "authenticationToken"
}
{
   "email": "example@gmail.com",
   "username": "Example",
   "password": "example123"
}
```

**DELETE** /user/delete/id
```javascript
{
   "token": "authenticationToken"
}
```

### Project

**GET** /project/list
```javascript
{
   "token": "authenticationToken"
}
```

**GET** /project/id
```javascript
{
   "token": "authenticationToken"
}
```

**POST** /project/register
```javascript
{
   "name": "Project Example",
   "description": "This is an example of a project",
   "deadline": "10/08/2025"
}
```

**PUT** /projecter/update/id
```javascript
{
   "token": "authenticationToken"
}
{
   "name": "Project Example",
   "description": "This is an example of a project",
   "deadline": "10/08/2025"
}
```

**DELETE** /project/delete/id
```javascript
{
   "token": "authenticationToken"
}
```

## License

MIT
