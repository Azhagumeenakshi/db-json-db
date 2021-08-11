const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_areas', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tablename: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    fieldorarea: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(1333),
      allowNull: true
    },
    reftable: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    refid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_areas',
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
        name: "mdl_toolbricarea_coucmi_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "cmid" },
        ]
      },
      {
        name: "mdl_toolbricarea_typtabitef_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "tablename" },
          { name: "itemid" },
          { name: "fieldorarea" },
        ]
      },
      {
        name: "mdl_toolbricarea_typconcomf_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "contextid" },
          { name: "component" },
          { name: "fieldorarea" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_toolbricarea_refreftyp_ix",
        using: "BTREE",
        fields: [
          { name: "reftable" },
          { name: "refid" },
          { name: "type" },
        ]
      },
      {
        name: "mdl_toolbricarea_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_toolbricarea_cmi_ix",
        using: "BTREE",
        fields: [
          { name: "cmid" },
        ]
      },
      {
        name: "mdl_toolbricarea_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
      {
        name: "mdl_toolbricarea_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
