module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
          // pass options to sass-loader
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.sass`
          // Note: this option is named as "prependData" in sass-loader v8
        //   postcss: [require('postcss-cssnext')()]
        }
    }
}