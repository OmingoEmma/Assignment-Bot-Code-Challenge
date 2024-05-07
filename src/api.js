import axios from "axios";

const getBots = async () => {
  try {
    const response = await axios.get("/db.json");
    return response.data.bots;
  } catch (error) {
    console.error("Error fetching bots:", error);
    return [];
  }
};

const getBotById = async (botId) => {
  try {
    const bots = await getBots();
    return bots.find((bot) => bot.id === botId);
  } catch (error) {
    console.error("Error fetching bot by ID:", error);
    return null;
  }
};

export { getBots, getBotById };