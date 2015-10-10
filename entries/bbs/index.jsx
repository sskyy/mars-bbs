'use strict'
var Roof = require('roof-zeroql')
var Posts = require('./components/Posts.jsx')
var Input = require('./components/Input.jsx')

require('./index.less')

module.exports = Roof.createRootContainer({
  backend : '/taurus/mars-bbs/query',
  types : [
    require('../../common/types/user.js'),
    require('../../common/types/post.js')
  ],
  events : [
    require('./events/client.js')
  ],
  render: function(){
    return <div className='container'>
      <div className='header'>
        Mars BBS
      </div>
      <Input />
      <Posts />
    </div>
  }
})
