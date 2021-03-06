const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'Test/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in/',
      onRequest: () => {
				//request.headers.auth = "123";
			}
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'APITest'
}