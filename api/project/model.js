const db = require("../../data/dbConfig");

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

async function addProject(project) {
  const [project_id] = await db("projects").insert(project);
  const addedProject = await db("projects")
    .where("project_id", project_id)
    .first();

  if (typeof addedProject.project_completed !== "boolean") {
    addedProject.project_completed = Boolean(addedProject.project_completed);
  }

  return addedProject;
}

module.exports = {
  getProjects,
  addProject,
};
