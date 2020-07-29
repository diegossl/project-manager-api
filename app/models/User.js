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
    this.belongsToMany(models.Project, { foreignKey: 'user_id', through: 'user_projects', as: 'projects' })
  }
}

module.exports = User
