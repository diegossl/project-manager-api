const { Model, DataTypes } = require('sequelize')

class Artist extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      popularity: DataTypes.INTEGER,
      spotifyPage: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.hasMany(models.Album, { foreignKey: 'album_id', as: 'albums' })
    this.belongsToMany(models.User, { foreignKey: 'artist_id', through: 'users_artists', as: 'users' })
    this.belongsToMany(models.Genre, { foreignKey: 'artist_id', through: 'artists_genres', as: 'genres' })
  }
}

module.exports = Artist
