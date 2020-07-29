const Project = require('../models/Project')

module.exports = {
  async store (request, response) {
    try {
      const project = request.body
      await Project.create(project)
      return response.status(200).send('Project successsfully registered')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
