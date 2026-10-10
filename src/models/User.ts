import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

class User extends Model {
  declare id: number;
  declare name: string;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: "Users"
})