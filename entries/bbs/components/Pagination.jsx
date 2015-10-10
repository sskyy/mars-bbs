var React = require('react')

module.exports = React.createClass({
  onChange : function( i ){
    this.props.onChange(i)
  },
  render : function(){
    if( !this.props.total || !this.props.limit ) return null

    var totalPages = Math.ceil(this.props.total/this.props.limit)
    var pages= []
    var offset = this.props.offset||0
    var currentPage = Math.floor(offset/this.props.limit) + 1

    for( var i = 1; i< totalPages+1; i++){
      pages.push(i)
    }

    return <div className='pagination'>
      {pages.map(page=>{
        return  (currentPage === page) ?
          <span className='page active a' key={page}>{page}</span>:
          <span className='page' key={page} onClick={this.onChange.bind(this,page)}>{page}</span>
      })}
    </div>
  }
})
