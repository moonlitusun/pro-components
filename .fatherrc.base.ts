import { defineConfig } from 'father';

export default defineConfig(
  process.env.NODE_ENV === 'development'
    ? {
        // 以下为 esm 配置项启用时的默认值，有自定义需求时才需配置
        esm: {
          input: 'src', // 默认编译目录
          output: 'es',
          extraBabelPlugins: [[require.resolve('./scripts/replaceLib'), {}]],
          platform: 'browser', // 默认构建为 Browser 环境的产物
          transformer: 'esbuild', // 默认使用 esbuild 以获得更快的构建速度
        },
      }
    : {
        // 以下为 esm 配置项启用时的默认值，有自定义需求时才需配置
        esm: {
          input: 'src', // 默认编译目录
          output: 'es',
          extraBabelPlugins: [[require.resolve('./scripts/replaceLib'), {}]],
          platform: 'browser', // 默认构建为 Browser 环境的产物
          transformer: 'babel', // 默认使用 esbuild 以获得更快的构建速度
        },
        // 以下为 cjs 配置项启用时的默认值，有自定义需求时才需配置
        cjs: {
          extraBabelPlugins: [[require.resolve('./scripts/replaceEs'), {}]],
          input: 'src', // 默认编译目录
          output: 'lib',
          platform: 'browser', // 默认构建为 Node.js 环境的产物
          transformer: 'babel', // 默认使用 esbuild 以获得更快的构建速度
        },
      },
);
