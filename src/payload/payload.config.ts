import { buildConfig } from 'payload/config';
import path from 'path';
import Blog from './collections/Blog';
import Events from './collections/Events';
import Media from './collections/Media';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- FintechToronto CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  collections: [
    Blog,
    Events,
    Media,
    // Users collection will be added later when authentication is implemented
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [
    'http://localhost:3000',
    'https://fintechtoronto.com',
  ],
  csrf: [
    'http://localhost:3000',
    'https://fintechtoronto.com',
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
});
