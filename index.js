
var path = require('path')

module.exports = {
  entries : {
    path : path.join(__dirname, 'entries'),
    container : require('./Page.jsx'),
    spec : {
      registry : {
        serverEvents :  [
          require('./entries/registry/events/server')
        ],
        types : [
          require('./common/types/user.js')
        ]
      }
    }
  },
  assets : [{
    path :  path.join(__dirname, 'public')
  }]
}
