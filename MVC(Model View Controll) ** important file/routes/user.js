const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleDeleteUserById,
  handleUpdateUserById,
  handleCreateNewuser,
} = require("../controllers/getAllUser");

// Fixing the incorrect order of req and res, and adding HTTP verb (get)
router.route("/").get(handleGetAllUsers).post(handleCreateNewuser);

// Route with :id parameter
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleUpdateUserById);

module.exports = router;
