const { Model, DataTypes } = require('sequelize')

class Album extends Model {
  static init (connection) {
    super.init({
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize: connection
    })
    this.removeAttribute('id')
  }
}

module.exports = Album
