import { ApolloServer, gql } from 'apollo-server'

// create a new apolloserver object via a constructor
// gql stands for graph query language,

const TODOS  = [
    {
        id:"1",
        task:"Todo 1",
        completed:true
    },
    {
        id:2,
        task:"Todo 2",
        completed:false
    },
    {
        id:3,
        task:"Todo 3",
        completed:true
    }
]

const USERS  = [
    {
        id:"1",
        email:"xyz1@gmail.com",
        completed:true
    },
    {
        id:2,
        email:"xyz2@gmail.com",
        completed:false
    },
    {
        id:3,
        email:"xyz3@gmail.com",
        completed:true
    }
]

const typeDefs = gql`
    type Todo{
        id:ID,
        task:String!,
        completed:Boolean
    }

    type User{
        id:ID,
        email:String!,
        completed:Boolean
    }

    type Query{
        getAllTodos: [Todo],
        getTodo(id:ID!):Todo!,
        getAllUsers: [User]!
    }
`

const resolvers = {
    Query: {
        getAllTodos: () => {
            // how do clients get array of todos in this query
            return TODOS;
        },
        getTodo: (_, params) => {
            return TODOS.find(todo => todo.id == params.id)
        },
        getAllUsers: () => {
            return USERS
        }
    }
}

const server = new ApolloServer({
    typeDefs:typeDefs,
    resolvers: resolvers
})

server.listen().then(() => {
    console.log('graphql server is up');
})