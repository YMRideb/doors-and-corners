const {
  createResource,
  getAllResources,
  getResourceById,
  deleteResourceById,
  updateResourceById,
} = require("../services/resource.service");

const handleCreateResource = async (req, res) => {
  console.log(req.body);
  try {
    const resource = await createResource(req.body);
    return res.json(resource);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetAllResources = async (req, res) => {
  try {
    const resources = await getAllResources();
    return res.json(resources);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleGetResourceById = async (req, res) => {
  try {
    const resource = await getResourceById(req.params.id);
    return res.json(resource);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleDeleteResourceById = async (req, res) => {
  try {
    const resource = await deleteResourceById(req.params.id);
    return res.json(resource);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const handleUpdateResourceById = async (req, res) => {
  try {
    const resource = await updateResourceById(req.params.id, req.body);
    return res.json(resource);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  handleCreateResource: handleCreateResource,
  handleGetAllResources: handleGetAllResources,
  handleGetResourceById: handleGetResourceById,
  handleDeleteResourceById: handleDeleteResourceById,
  handleUpdateResourceById: handleUpdateResourceById,
};
