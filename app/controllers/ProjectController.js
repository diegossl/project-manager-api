const Project = require('../models/Project')
const UserProjects = require('../models/UserProjects')

module.exports = {
  async index (request, response) {
    try {
      const { userId } = request.body
      const userProjects = await UserProjects.findAll({ where: { user_id: userId } })
      const projectsId = userProjects.map((project) => {
        return project.project_id
      })
      const allUserProjects = await Project.findAll({ where: { id: projectsId } })
      return response.status(200).send(allUserProjects)
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async getProject (request, response) {
    try {
      const projectId = request.params.id
      const project = await Project.findOne({ where: { email: projectId } })
      return response.status(200).send(project)
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  },

  async store (request, response) {
    try {
      const { userId } = request.body
      const { name, description, deadline } = request.body
      const newProject = {
        name: name,
        description: description,
        deadline: deadline
      }
      const project = await Project.create(newProject)
      await UserProjects.create({
        user_id: userId,
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
      return response.status(500).send('Internal server error')
    }
  },

  async destroy (request, response) {
    try {
      const projectId = request.params.id
      await Project.destroy({ where: { id: projectId } })
      return response.status(200).send('Project successsfully deleted')
    } catch (error) {
      return response.status(500).send('Internal server error')
    }
  }
}
