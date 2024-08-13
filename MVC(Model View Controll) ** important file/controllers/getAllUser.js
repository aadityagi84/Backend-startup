const users = require("../models/user");

async function handleGetAllUsers(req, res) {
  try {
    const allDBS = await users.find({});
    res.json(allDBS);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function handleGetUserById(req, res) {
  try {
    const data = await users.findById(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

async function handleUpdateUserById(req, res) {
  await user.findByIdAndUpdate(req.params.id), { last_name: "changed" };
  return res.json({ status: "completed " });
}
async function handleDeleteUserById(req, res) {
  await user.findByIdAndDelet(req.params.id);
  return res.json({ status: "completed " });
}

async function handleCreateNewuser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.email ||
    !body.last_name ||
    !body.first_name ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  try {
    // try cat chache ke anadr jo name or varible define kre gye vo schema se match hone chaye

    const result = await users.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title, // Ensure this matches the schema
    });
    console.log("result", result);
    return res.status(201).json({ msg: "success", id: result._id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error creating user" });
  }
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewuser,
};
