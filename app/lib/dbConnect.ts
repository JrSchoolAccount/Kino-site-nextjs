import mongoose from "mongoose";

const connection: { isConnected?: number} = {};

export default async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect("mongodb+srv://nelsonthebrave:MjVnKHn0eHwB0g31@kinodb.swomc4h.mongodb.net/kinoDB");

    connection.isConnected = db.connections[0].readyState;
}