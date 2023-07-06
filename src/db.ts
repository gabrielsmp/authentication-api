import { Pool } from "pg";

const connectionString = 'link PostgreSQL';

const db = new Pool({ connectionString });

export default db;