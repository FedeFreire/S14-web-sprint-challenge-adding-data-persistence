// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
    return db("projects")
      .select(
        "projects.project_name",
        "projects.project_description",
        "projects.project_completed"
        )
        .then((projects) =>
            projects.map((project) => ({
                ...project,
                project_completed: Boolean(project.project_completed),
            }))
            );
        }


module.exports = {
    getProjects,

};
