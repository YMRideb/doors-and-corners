const { default: mongoose } = require("mongoose");

//=============================================================================
// The Resource Collection aka database
//=============================================================================

const ResourceSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
    },

    company_contact: {
      type: String,
      required: [true, "You need to document a contact, please"],
    },

    company_focus: {
      type: String,
    },

    company_phone: {
      type: Number,
    },

    contact_email: {
      type: String,
      required: [true, "You need to document a company's contact info, please"],
    },

    contact_linkedin: {
      type: String,
      required: [
        true,
        "You need to document a company's contact info, thank you",
      ],
    },

    additional_notes: {
      type: String,
    },

    latest_contact: {
      type: Date,
      required: [
        true,
        "You need to document the last time you contacted them, thank you",
      ],
    },

    //=============================================================================
    // checkboxes for boolean values, id'ing which county the resource is in
    //=============================================================================

    spokane_county: {
      type: Boolean,
      default: true,
    },

    grant_county: {
      type: Boolean,
      default: false,
    },

    wallawalla_county: {
      type: Boolean,
      default: false,
    },

    yakima_county: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model("resource", ResourceSchema);
module.exports = { Resource: Resource };
