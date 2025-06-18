import { MongoClient } from 'mongodb';
import {transactionsDitals, transactions} from "./transfer.js";
import {deleteAccount, setUpDatabase} from "./ex2-transactions/setup.js";



export const uri = 'mongodb+srv://Ilias:zePnKS09BRPZBwaW@cluster0.w5e36f8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);


try {
    // deleteAccount();
    // setUpDatabase()
   await transactions(client, 103, 101, 500, "Gift");


} catch (error) {
    console.error(error)
} finally {
    await client.close();
}
