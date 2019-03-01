
import {people, getById} from "./db"

const resolvers = {
    Query : {
        people:() => people,
        // person:() => getById()
        person: (_, args) => {
            console.log(args);
        }
    }
}

export default resolvers