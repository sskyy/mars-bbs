'use strict';

module.exports = function (galaxies) {
  return {
    'post.create' : {fn:function *createPost(){
      galaxies.get('Posts','posts').refetch()
    },last:true},
    'post.update' : {fn:function *updatePost(){
      galaxies.get('Posts','posts').refetch()
    },last:true},
    'post.remove' : {fn:function *updatePost(){
      galaxies.get('Posts','posts').refetch()
    },last:true}
  }
};

