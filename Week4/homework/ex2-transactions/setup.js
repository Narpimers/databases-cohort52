import { MongoClient } from 'mongodb';
import { uri } from "../Aggregation.js";
import uuid4 from "uuid4";

const client = new MongoClient(uri);

export const deleteAccount = async (client) => {
    await client.db("databaseWeek4").collection("account").deleteMany({});
    console.log("Collection 'account' deleted");
};

export const setUpDatabase = async (client, amountNumber, amount) => {
    const account = {
        accountNumber: amountNumber,
        balance: amount,
        account_changes: []
    };

    await client.db("databaseWeek4").collection("account").insertOne(account);

    console.log(`Inserted account with number: ${account.accountNumber}`);
};
