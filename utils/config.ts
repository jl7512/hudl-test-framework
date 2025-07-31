import dotenv from 'dotenv';

if (!process.env.ENV) throw new Error(`The "ENV" environment variable is not defined. Please set ENV in the npm script. E.g. cross-env ENV='prod'`);

// Load environment specific .env file
dotenv.config({
  path: `.env.${process.env.ENV}`,
});

if (!process.env.BASE_URL) throw new Error('BASE_URL is not defined in the environment variables');
export const BASE_URL = process.env.BASE_URL;

if (!process.env.HUDL_USERNAME) throw new Error('HUDL_USERNAME is not defined in the environment variables');
export const HUDL_USERNAME = process.env.HUDL_USERNAME;

if (!process.env.HUDL_PASSWORD) throw new Error('HUDL_PASSWORD is not defined in the environment variables');
export const HUDL_PASSWORD: string = process.env.HUDL_PASSWORD;
