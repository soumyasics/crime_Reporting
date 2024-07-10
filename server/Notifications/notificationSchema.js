const mongoose = require("mongoose");
const { Schema } = mongoose;
const nSchema = new Schema(
    {

        citizenId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "citizens"
        },
        psId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "police"
        },
        date: {
            type: Date,
            required: true,
        },

        caseType: {
            type: String,

        },
        district: {
            type: String,

        }

    })
const complaint = mongoose.model("notifications", nSchema);
module.exports = complaint;