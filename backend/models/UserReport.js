const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  bodyType: { type: String, required: true },
  height: String,
  weight: String,
  goal: [String],
  activityLevel: String,
  plan: {
    workout: String,
    nutrition: String
  }
});

const UserReport = mongoose.model('UserReport', userSchema);

module.exports = UserReport;
