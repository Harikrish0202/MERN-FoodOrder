const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: {
      phone: { type: String },
      email: { type: String },
    },
    website: String,
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    status: {
      status: {
        required: true,
        type: String,
        enum: ["ONLINE", "PAUSED"],
        default: "ONLINE",
      },
      paused_until: {
        type: Date,
        default: undefined,
      },
      reason: {
        type: String,
        default: undefined,
      },
    },
    holiday_hours: {
      type: Map,
      of: [
        {
          start_time: String,
          end_time: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);
restaurantSchema.index({ location: "2dsphere" });
restaurantSchema.index({ address: "text" });

restaurantSchema.pre("save", function (next) {
  if (this.status.status == "PAUSED") {
    s;
    this.status.paused_until = new Date();
    this.status.reason = "Store is unable to accept orders ";
  }
  next();
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;
