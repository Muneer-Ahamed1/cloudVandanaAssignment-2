import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  dotenv from "dotenv";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env.React_App_Client_Id':JSON.stringify(process.env.React_App_Client_Id)
  },
  server: {
    host: "localhost",
    port: 5173,
  },
})
