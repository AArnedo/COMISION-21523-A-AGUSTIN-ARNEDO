const { DataTypes, sequelize } = require ('../database');

const PublicacionSchema = sequelize.define('Publicaciones', {
    // Model attributes are defined here
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    comentarios:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    url_imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },{
    tableName: 'publicaciones',
    timestamps: false
  });


  module.exports = PublicacionSchema;