import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: './src/infrastructure/tests.setup.ts',
    },
    resolve: {
      alias: {
        assets: resolve(__dirname, 'src', 'assets'),
        layouts: resolve(__dirname, 'src', 'layouts'),
        routes: resolve(__dirname, 'src', 'routes'),
        components: resolve(__dirname, 'src', 'components'),
        pages: resolve(__dirname, 'src', 'pages'),
        sections: resolve(__dirname, 'src', 'sections'),
        constants: resolve(__dirname, 'src', 'constants'),
        libs: resolve(__dirname, 'src', 'libs'),
        mocks: resolve(__dirname, 'src', 'mocks'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        utils: resolve(__dirname, 'src', 'utils'),
        theme: resolve(__dirname, 'src', 'theme'),
        types: resolve(__dirname, 'src', 'types'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
      },
    },
  };
});
