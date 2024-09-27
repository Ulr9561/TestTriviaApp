import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    server: {
        port: process.env.PORT ? parseInt(process.env.PORT) : 5173, 
        host: "0.0.0.0",
    },
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/*",
                    dest: "assets",
                },
            ],
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name]-[hash][extname]",
            },
        },
    },
});

