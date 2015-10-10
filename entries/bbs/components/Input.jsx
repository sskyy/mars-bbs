var Roof = require('roof-zeroql')

module.exports = Roof.createContainer({
  onChange : function(e){
    this.setState({content : e.target.value})
  },
  onKeyUp : function(e){
    if(e.which !== 13) return

    var post = {content:this.state.content }
    this.bus.fire('post.create',post).then(function(){
      //alert('post created.')
    }).catch(function(e){
      console.error(e)
      alert('post failed.')
    })

  },
  render: function () {
    return <div className='post-input'>
      <textarea onKeyUp={this.onKeyUp} onChange = {this.onChange} placeholder="What's new today?"/>
    </div>
  }
})
