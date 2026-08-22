import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSvgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr({ include: '**/*.svg' }), tsconfigPaths()],
});
