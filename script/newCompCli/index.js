const collectInfo = require('./collectInfo')
const replaceTpl = require('./replaceTpl')

async function run() {
  const meta = await collectInfo()
  replaceTpl(meta)
}

run()
