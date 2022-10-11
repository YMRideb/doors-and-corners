const express = require("express");

//=============================================================================
// these functions are in the controller file and
//=============================================================================
const {
  handleCreateResource,
  handleGetAllResources,
  handleGetResourceById,
  handleDeleteResourceById,
  handleUpdateResourceById,
} = require("../controller/resource.controller");

const router = express.Router();

router.post("/", handleCreateResource);
router.get("/", handleGetAllResources);

//data at the :id spot in url is accessed with the req.params.id
//route paras can be named anything and the name will be added to req.params
router.get("/:id", handleGetResourceById);
router.delete("/:id", handleDeleteResourceById);
router.put("/:id", handleUpdateResourceById);

module.exports = { resourceRouter: router };
