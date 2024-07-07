const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  district: {
    type: String
  },
  policeStation: {
    type: String
  },
  victimName: {
    type: String
  },
  victimGender: {
    type: String
  },
  victimEmail: {
    type: String
  },
  victimAddress: {
    type: String
  },
  incidentDate: {
    type: Date
  },
  incidentTime: {
    type: String
  },
  incidentLocation: {
    type: String
  },
  incidentCity: {
    type: String
  },
  witnessName: {
    type: String
  },
  witnessContact: {
    type: String
  },
  witnessAddress: {
    type: String
  },
  witnessStatement: {
    type: String
  },
  caseDescription: {
    type: String
  },
  caseType: {
    type: String
  },
  theftStolenItems: {
    type: String
  },
  theftStolenSuspected: {
    type: String
  },
  assaultInjuries: {
    type: String
  },
  assaultMedicalAttention: {
    type: String
  },
  vandalismDescription: {
    type: String
  },
  vandalismCostOfDamage: {
    type: String
  },
  missingPersonName: {
    type: String
  },
  missingPersonDescription: {
    type: String
  },
  domesticViolenceDescription: {
    type: String
  },
  domesticViolenceInjuries: {
    type: String
  },
  fraudDescription: {
    type: String
  },
  fraudFinancialLoss: {
    type: String
  },
  others: {
    type: String
  },
  evidenceFiles: {
    type: [String]
  }
});

module.exports = mongoose.model('Case', caseSchema);
