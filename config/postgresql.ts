import { createConnection, Connection, ConnectionOptions, getConnection } from 'typeorm'

class PostgreSQL {
  private static instance: PostgreSQL

  private constructor () {}

  public static getInstance (): PostgreSQL {
    if (!this.instance) {
      this.instance = new PostgreSQL()
    }
    return this.instance
  }

  public async connection (): Promise<Connection> {
    const credentials: ConnectionOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'playlist'
    }
    return await createConnection(credentials)
  }
}

export default PostgreSQL.getInstance()
