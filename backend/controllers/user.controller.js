import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");//do not display logged in user in sidebar (cannot message to self) ({ _id: { $ne: loggedInUserId } } on removing this functionality self messaging is possible)

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUserForSidebar ", error.message);
        res.status(500).json({ error: "Internal Server Error "});
    }
}