var Roof = require('roof-zeroql')
var Post = require('./Post.jsx')
var Pagination = require('./Pagination.jsx')

module.exports = Roof.createContainer({
  name : 'Posts',
  rootQueries : {
    posts : `
      Post(_total:true,_orderBy:'id DESC',_limit:5) {
        ${Post.getQuery('post')},
      }
    `
  },
  gotoPage : function( page ){
    this.props.posts.query.setAttr('_offset', (page-1) * 5)
  },
  render : function(){
    return <div>
        {this.props.posts.map(function(post){
          return <Post key={post.get('id')} post={post}></Post>
        })}


      <Pagination
          total={this.props.posts.total}
          limit={this.props.posts.limit}
          offset={this.props.posts.offset}
          onChange={this.gotoPage} />
    </div>
  }
})