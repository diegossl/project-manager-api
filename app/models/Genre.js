const { Model, DataTypes } = require('sequelize')

class Genre extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.belongsToMany(models.Artist, { foreignKey: 'genre_id', through: 'users_artists', as: 'artists' })
  }
}

module.exports = Genre
