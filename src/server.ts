import "dotenv/config"
import { app } from "./app.js";
import { sequelize } from "./config/database.js";

const PORT = process.env.PORT || 3000

async function start() {
  try {
    await sequelize.authenticate();
    console.log("Database connected!")

    app.listen(PORT, () => {
      console.log(`Server started: http://localhost:${PORT}`)
    })
  } catch(error) {
    console.error(`Database connection error: ${error}`)
  }
} 

start()