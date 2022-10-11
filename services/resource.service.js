const { Resource } = require("../models/resource.model");

const createResource = async (data) => {
  const resource = await Resource.create(data);
  return resource;
};

const getAllResources = async () => {
  const resources = await Resource.find();
  return resources;
};

const getResourceById = async (id) => {
  const resource = await Resource.findById(id);
  return resource;
};

const deleteResourceById = async (id) => {
  const resource = await Resource.findByIdAndDelete(id);
  return resource;
};

const updateResourceById = async (id, data) => {
  const resource = await Resource.findByIdAndUpdate(id, data, {
    //Re-run validators
    runValidators: true,
    //return the updated destination
    new: true,
  });
  return resource;
};

module.exports = {
  getAllResources,
  getResourceById,
  deleteResourceById,
  createResource,
  updateResourceById,
};
