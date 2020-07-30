const Project = require('../models/Project')
const UserProjects = require('../models/UserProjects')

module.exports = {
  async index (request, response) {
    try {
      const projects = await Project.findAll()
      return response.status(200).send(projects)
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async store (request, response) {
    try {
      const newProject = request.body
      const project = await Project.create(newProject)
      await UserProjects.create({
        user_id: request.body.userEmail,
        project_id: project.id
      })
      return response.status(200).send('Project successsfully registered')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async update (request, response) {
    try {
      const projectId = request.params.id
      const projectData = request.body
      await Project.update(projectData, { where: { id: projectId } })
      return response.status(200).send('Project successsfully updated')
    } catch (error) {
      console.log(error)
      return response.status(500).send('Internal server error')
    }
  },

  async destroy (request, response) {
    try {
      const project = request.params
      await Project.destroy({ where: { id: project.id } })
      return response.status(200).send('Project successsfully deleted')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
