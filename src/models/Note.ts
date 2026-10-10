import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Note extends Model {
  declare id: number;
  declare title: string;
  declare content: string;
}

Note.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: "Notes" })