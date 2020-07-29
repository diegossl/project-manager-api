const { Model, DataTypes } = require('sequelize')

class Project extends Model {
  static init (connection) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deadline: DataTypes.DATE
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.belongsToMany(models.User, { foreignKey: 'project_id', through: 'user_projects', as: 'users' })
  }
}

module.exports = Project
