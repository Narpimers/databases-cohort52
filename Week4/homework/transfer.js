import uuid4 from "uuid4";



export const transactionsDitals = (amount, change_number, remark) => {
    return {
        amount,
        change_number,
        changed_date: new Date(),
        remark: remark

    };
};

export const transactions = async (client, from, to, amount, remark) => {
    const accounts = client.db("databaseWeek4").collection("account");
    const session = client.startSession();
    const change_number = uuid4();

    try {
        await session.withTransaction(async () => {
            await accounts.updateOne(
                { accountNumber: from },
                { $inc: { balance: -amount } },
                { session }
            );
            await accounts.updateOne(
                { accountNumber: from },
                { $push: { account_changes: transactionsDitals(amount, change_number, remark)} },
                { session }
            );
            await accounts.updateOne(
                { accountNumber: to },
                { $inc: { balance: amount } },
                { session }
            );
            await accounts.updateOne(
                { accountNumber: to },
                { $push: { account_changes: transactionsDitals(amount, change_number, remark)} },
                { session }
            );
        });
        console.log("Transaction completed successfully");
    } catch (e) {
        console.error("Transaction aborted due to an error:", e);
    } finally {
        await session.endSession();
    }
};