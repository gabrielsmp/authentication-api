import { Pool } from "pg";

const connectionString = 'postgres://jnmzpyej:CUHVy03JfuNp6gTz_22DLk-ufmrqw2HC@stampy.db.elephantsql.com/jnmzpyej';

const db = new Pool({ connectionString });

export default db;