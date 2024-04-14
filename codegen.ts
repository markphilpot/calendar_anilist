import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './assets/schema.json',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/graphql/**/*.{ts,tsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
      config: {
        enumsAsTypes: true,
        avoidOptionals: {
          field: true,
        },
        namingConvention: 'keep',
        nonOptionalTypename: true,
        declarationKind: 'interface',
        arrayInputCoercion: false,
        scalars: {
          Long: 'number',
        },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
