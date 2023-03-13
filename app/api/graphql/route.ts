import { ApolloServer } from '@apollo/server';
import { join } from 'node:path';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { readFileSync } from 'node:fs';

const typeDefs = readFileSync(join(process.cwd(), 'schema.graphql'), 'utf8');

const menusResult = [
  {
    calendar: {
      id: 'd81edf53-311b-4acc-8ce5-ec2291036e33',
      displayName: 'My calendar',
      owner: {
        id: '1cb8d2a6-eac0-492f-b558-ece16c841a3d',
        displayName: 'Jeff',
      },
    },
    date: '02/02/2024',
    attendance: [
      {
        user: {
          id: '4eef9177-750c-4476-95b5-d67588552f54',
          displayName: 'Clive',
        },
        isAttending: true,
      },
    ],
    options: [
      {
        title: 'Spaghetti Bolognese',
        descripiton: 'With extra sauce',
        suggester: {
          id: '4eef9177-750c-4476-95b5-d67588552f54',
          displayName: 'Clive',
        },
        votes: [
          {
            voter: {
              id: '4eef9177-750c-4476-95b5-d67588552f54',
              displayName: 'Clive',
            },
            upvote: true,
          },
        ],
      },
    ],
  },
];

const resolvers = {
  Query: {
    menus: () => menusResult,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);
