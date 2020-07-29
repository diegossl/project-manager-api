const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (connection) {
    super.init({
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.belongsToMany(models.Artist, { foreignKey: 'user_id', through: 'users_artists', as: 'artists' })
  }
}

module.exports = User
