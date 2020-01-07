/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; //declaring that we are running node, Babel uses this

webpack(webpackConfig).run((err, stats) => {
  if (err) {//so a fatal error occrued here.
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yelllow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  //if we get this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to /dist!'))

  return 0;
});
