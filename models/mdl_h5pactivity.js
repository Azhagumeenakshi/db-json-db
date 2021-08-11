const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5pactivity', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    displayoptions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    enabletracking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    grademethod: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    reviewmode: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_h5pactivity',
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
        name: "mdl_h5pa_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
