const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_summary', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    activities: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activitiespassed: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    activitiesfailed: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype6: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorschecktype7: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype6: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedchecktype7: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype6: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    percentchecktype7: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_summary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mdl_toolbricsumm_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "mdl_toolbricsumm_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
