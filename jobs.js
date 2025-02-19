const mongoose = require("mongoose");
const User = require("./models/User");

const updateCounter = async (userId) => {
    try {
        const objectId = new mongoose.Types.ObjectId(userId); // Convert to ObjectId
        let user = await User.findById(objectId);

        if (!user) {
            user = new User({ _id: objectId, counter: 0, prizes: 0 });
        }

        user.counter += 1;

        const randomChance = Math.random();
        if (randomChance < 0.5) {
            user.counter += 9;
        } else if (randomChance < 0.75) {
            user.prizes += 1;
        }

        await user.save();
        return { counter: user.counter, prizes: user.prizes };
    } catch (error) {
        console.error("❌ Error updating counter:", error.message);
        return { error: "Invalid userId format" };
    }
};

module.exports = { updateCounter };
