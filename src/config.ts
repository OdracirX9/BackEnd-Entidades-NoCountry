import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 5000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
export const DB_NAME = process.env.DB_NAME || 'Mascotas'
