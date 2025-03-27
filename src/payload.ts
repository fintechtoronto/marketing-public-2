import { getPayloadClient } from 'payload/dist/client';
import { config } from 'dotenv';
import path from 'path';
import payload from 'payload';

// Initialize environment variables
config();

// Cache the client
let cachedClient: any;

export const getPayload = async () => {
  if (!process.env.PAYLOAD_SECRET) {
    process.env.PAYLOAD_SECRET = 'fintechtoronto-secret-key';
  }

  if (cachedClient) {
    return cachedClient;
  }

  if (!process.env.MONGODB_URI) {
    // For local development, use a local database
    // In production, this would be set to a MongoDB connection string
    process.env.MONGODB_URI = 'mongodb://localhost/fintechtoronto';
  }

  // Initialize Payload
  if (!payload.initialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      mongoURL: process.env.MONGODB_URI,
      express: null,
      onInit: () => {
        console.log('Payload initialized');
      },
    });
  }

  cachedClient = payload;
  return cachedClient;
};
