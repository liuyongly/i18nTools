const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      builderOptions: {
        productName: "i18nTools",
        appId: "com.i18nTools.tools",
        win: {
          icon: "./static/logo.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"],
            },
          ],
          publish: ["github"],
        },
        mac: {
          icon: "./static/logo.png",
          target: ["pkg", "dmg", "zip"],
        },
        linux: {
          icon: "./static/logo.png",
        },
        publish: ['github'],
        extraResources: [
            {from: './static', to: 'static'}
        ]
      }
    }
  },
  configureWebpack: {
    // module: {
    //   rules: [
    //     // SASS has different line endings than SCSS
    //     // and cannot use semicolons in the markup
    //     {
    //       test: /\.sass$/,
    //       use: [
    //         "vue-style-loader",
    //         "css-loader",
    //         {
    //           loader: "sass-loader",
    //           // Requires sass-loader@^7.0.0
    //           options: {
    //             // This is the path to your variables
    //             data: "@import '@/styles/variables.scss'",
    //           },
    //           // Requires sass-loader@^8.0.0
    //           options: {
    //             // This is the path to your variables
    //             prependData: "@import '@/styles/variables.scss'",
    //           },
    //           // Requires >= sass-loader@^9.0.0
    //           options: {
    //             // This is the path to your variables
    //             additionalData: "@import '@/styles/variables.scss'",
    //           },
    //         },
    //       ],
    //     },
    //     // SCSS has different line endings than SASS
    //     // and needs a semicolon after the import.
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         "vue-style-loader",
    //         "css-loader",
    //         {
    //           loader: "sass-loader",
    //           //  需要 sass-loader@^7.0.0
    //           options: {
    //             // 这是你的变量文件的路径
    //             data: "@import '@/styles/variables.scss';",
    //           },
    //           // 需要 sass-loader@^8.0.0
    //           options: {
    //             // 这是你的变量文件的路径
    //             prependData: "@import '@/styles/variables.scss';",
    //           },
    //           // 需要 sass-loader@^9.0.0
    //           options: {
    //             // 这是你的变量文件的路径
    //             additionalData: "@import '@/styles/variables.scss';",
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
    // resolve: {
    //   fallback: {
    //     path: require.resolve('path-browserify'),
    //   },
    // },
  },
});
