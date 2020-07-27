const { Model, DataTypes } = require('sequelize')

class Album extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      releaseDate: DataTypes.STRING,
      totalTracks: DataTypes.INTEGER,
      spotifyPage: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.belongsTo(models.Artist, { foreignKey: 'artist_id', as: 'artist' })
  }
}

module.exports = Album
