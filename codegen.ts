import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'schema.graphql',
  documents: 'app/**/*.gql.ts',
  generates: {
    'app/types.ts': { plugins: ['typescript'] },
    'app/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
      },
    },
  },
};

export default config;
