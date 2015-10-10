'use strict';

module.exports = function (galaxies) {
  return {
    'post.create' : function *createPost(postData){
      var User = galaxies.getNodeClass('User')
      var Post = galaxies.getNodeClass('Post')

      if( !this.req.session.user || !this.req.session.user.id ) {
        return this.error(403,{msg:'you are not logged in'})
      }

      var creator = yield User.from({id : this.req.session.user.id})
      if( !creator )  return this.error(406,{msg:'cannot find current user'})

      //尝试优化性能,有主键的实例就可以代表当前实例了

      var post = new Post(postData)
      post.relate( creator, 'created', true)
      return post.push()
    },
    'post.update'  : function *updatePost( postData ){
      var Post = galaxies.getNodeClass('Post')
      var post = yield Post.from(`Post(id:${postData.id}){ User created{id}}`)

      if( this.req.session.user.id !== post.getRelative('created').get('id') ){
        return this.error('406',{msg:'you are not authorized to update this post.'})
      }

      post.set('content',postData.content)
      return post.push()
    },
    'post.remove'  : function *removePost( id ){
      var Post = galaxies.getNodeClass('Post')
      var post = yield Post.from(`Post(id:${postData.id}){ User created{id}}`)

      if( this.req.session.user.id !== post.getRelative('created').get('id') ){
        return this.error('406',{msg:'you are not authorized to update this post.'})
      }

      post.destroy()
      return post.push()
    }
  }
};

