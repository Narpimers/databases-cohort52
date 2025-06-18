import { MongoClient } from 'mongodb'


export const uri = 'mongodb+srv://Ilias:zePnKS09BRPZBwaW@cluster0.w5e36f8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        PopulationPerYearInCountry(client, "Netherlands");
        findByYearAndAge(client, 1950, "100+");

        await client.db("admin").command( { ping: 1 })
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

const findByNameOfCity = async (client, cityName) => {
    const result = await client.db("databaseWeek4").collection("population_pyramid_1950-2022").find({Country: cityName});
    console.log(result);
}

const PopulationPerYearInCountry = async (client, countryName) => {
    const pipeline = [
        {
            '$match': {
                'Country': 'Afghanistan'
            }
        }, {
            '$group': {
                '_id': '$Year',
                'countPopulation': {
                    '$sum': {
                        '$add': [
                            '$M', '$F'
                        ]
                    }
                }
            }
        }, {
            '$sort': {
                '_id': -1
            }
        }
    ];
    const result = await client.db("databaseWeek4").collection("population_pyramid_1950-2022").aggregate(pipeline).toArray();;
    console.table(result);
}

const findByYearAndAge = async (client, year, age) => {
    const pipeline = [
        {
            '$match': {
                'Country': {
                    '$regex': '^[A-Z]+$'
                }
            }
        }, {
            '$match': {
                'Age': age,
                'Year': year
            }
        }, {
            '$addFields': {
                'TotalPopulation': {
                    '$add': [
                        '$M', '$F'
                    ]
                }
            }
        }
    ];

    const result = await client.db("databaseWeek4").collection("population_pyramid_1950-2022").aggregate(pipeline).toArray();
    console.table(result);
}