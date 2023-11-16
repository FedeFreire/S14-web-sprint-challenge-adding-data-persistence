const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks");
}

async function addTask(task) {
  const [task_id] = await db("tasks").insert(task);
  const addedTask = await db("tasks").where("task_id", task_id).first();

  if (typeof addedTask.task_completed !== "boolean") {
    addedTask.task_completed = Boolean(addedTask.task_completed);
  }

  return addedTask;
}

function getTasksWithProjectDetails() {
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    )
    .then((tasks) =>
      tasks.map((task) => ({
        ...task,
        task_completed: Boolean(task.task_completed),
      }))
    );
}

module.exports = {
  getTasks,
  addTask,
  getTasksWithProjectDetails,
};
