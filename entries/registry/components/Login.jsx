var Roof = require('roof-zeroql')


module.exports = Roof.createContainer({
  submit: function (e) {
    e.preventDefault()
    this.bus.fire('user.signin',{
        name:this.refs.name.getDOMNode().value,
        password:this.refs.password.getDOMNode().value
      }).then(()=>{
        alert('登录成功')
      }).catch(e=>{
        console.log(e)
        alert('登录失败')
      })
  },
  render: function () {
    return <div className='block'>

      <div className='title'>Sign In</div>

      <div className='row'>
          <input  type="text" id="name" ref="name" placeholder="请输入用户名"/>
      </div>

      <div className='row'>
          <input  type="password" id="password" ref="password" placeholder="请输入密码"/>
      </div>

      <div className='row center'>
        <button onClick={this.submit}>Sign In</button>
      </div>

    </div>
  }
})
