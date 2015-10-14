var _ = require('lodash')
var path = require('path')
require('node-jsx').install({extension: '.jsx'})


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
      },
      bbs : {
        serverEvents : [
          require('./entries/bbs/events/server')
        ],
        types : [
          require('./common/types/user.js'),
          require('./common/types/post.js')
        ],
        context: function(){
          return { user : _.cloneDeep( (this.session && this.session.user)||{}) }
        }
      }
    }
  },
  assets : [{
    path :  path.join(__dirname, 'public')
  }],
  connection: {
    host: 'localhost',
    user: 'root',
    socketPath: '/tmp/mysql.sock',
    database: 'bbs'
  }
}
