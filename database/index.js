const { Sequelize } = require('sequelize')
const database = require('../config/database')
const User = require('../app/models/User')
const Project = require('../app/models/Project')
const UserProjects = require('../app/models/UserProjects')

const connection = new Sequelize(database)

User.init(connection)
Project.init(connection)
UserProjects.init(connection)

User.associate(connection.models)
Project.associate(connection.models)

module.exports = connection
