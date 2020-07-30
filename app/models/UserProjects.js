const { Model, DataTypes } = require('sequelize')

class UserProjects extends Model {
  static init (connection) {
    super.init({
      user_id: DataTypes.INTEGER,
      project_id: DataTypes.INTEGER
    }, {
      sequelize: connection
    })
  }
}

module.exports = UserProjects
