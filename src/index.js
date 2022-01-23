const GotoClient = require('./structures/GotoClient')
const config = require('./util/config.json')

let client = new GotoClient({
    prefix: '?',
})

client.login(config.token)