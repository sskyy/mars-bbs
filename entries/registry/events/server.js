'use strict';

module.exports = function (galaxies) {
  return {
    'user.signup' : function *saveUser(data){
      var User = galaxies.getNodeClass('user')
      var user = new User(data)
      yield user.push()
      this.data.set('createdUser', user.toObject())
    },
    'user.signin': function *userLogin(identity) {
      console.log('trying to login', identity, this.req.session)
      var User = galaxies.getNodeClass('User')
      var user = yield User.from({name: identity.name, password: identity.password})
      if (!user) {
        console.log('user not exist')
        return this.error(406, {msg: 'user not exist'})
      }

      this.req.session.user = {name: identity.name,id:user.get('id')}
      console.log('set session', this.req.session)
      this.data.set('user.login.result', {name: identity.name})
    }
  }
};

