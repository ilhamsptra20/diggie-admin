import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { postcss } from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), postcss, autoprefixer],
})
