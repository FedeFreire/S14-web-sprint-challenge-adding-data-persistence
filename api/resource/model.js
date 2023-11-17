const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

async function addResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  const addedResource = await db("resources")
    .where("resource_id", resource_id)
    .first();

  if (typeof addedResource.resource_completed !== "boolean") {
    addedResource.resource_completed = Boolean(
      addedResource.resource_completed
    );
  }

  return addedResource;
}

module.exports = {
  getResources,
  addResource,
};
