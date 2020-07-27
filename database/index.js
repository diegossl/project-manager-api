const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const User = require('../app/models/User')
const Artist = require('../app/models/Artist')
const Album = require('../app/models/Album')
const Genre = require('../app/models/Genre')

const connection = new Sequelize(dbConfig)

User.init(connection)
Artist.init(connection)
Album.init(connection)
Genre.init(connection)

User.associate(connection.models)
Artist.associate(connection.models)
Album.associate(connection.models)
Genre.associate(connection.models)

module.exports = connection
