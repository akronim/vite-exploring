import { pluckAndLog } from "@marinko_m/pluck";
import { log } from "@marinko_m/pluck/log";

const users = [
    {
        name: 'John',
        age: 26
    },
    {
        name: 'Jane',
        age: 32
    },
    {
        name: 'Johnny',
        age: 2
    }
]

pluckAndLog(users, 'name');