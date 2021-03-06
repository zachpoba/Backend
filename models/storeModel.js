const mongoose = require('mongoose');
//const validators = require('validator');
const { Schema } = mongoose;
const Stream = require('./streamSchemaType');

const storeSchema = new Schema({
  ui_reducer: {
    colorIndex: {
      type: Number,
      required: true,
    },
    dualSelectValue: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    selectedAccount: {
      type: String,
      required: true,
    },
    selectedUser: {
      type: String,
      required: true,
    },
    selectedId: {
      type: String,
      required: true,
    },
    selectedPage: {
      type: String,
      required: true,
    },
    selectedScenario: {
      type: Number,
      required: true,
    },
    scenarios: {
      type: Number,
      required: true,
    },
  },
  user_reducer: {
    hasUnsecuredDebt: {
      type: Boolean,
      required: true,
    },
    hasChildrenStatus: {
      type: String,
      required: true,
    },
    inflationRate: {
      type: Number,
      required: true,
    },
    ownHome: {
      type: Boolean,
      required: true,
    },
    numberOfChildren: {
      type: Number,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    user1: {
      birthYear: {
        type: Number,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      hasChildren: {
        type: Boolean,
        required: true,
      },
      isMarried: {
        type: Boolean,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    },
    user2: {
      birthYear: {
        type: Number,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
    },
  },
  stream_reducer: { type: Map, of: Stream },
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;
