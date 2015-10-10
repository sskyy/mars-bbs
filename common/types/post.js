module.exports ={
  type : 'Post',
  primary : 'id',
  fields : {
    content : 'STRING',
  },
  relations : [{
    name : 'created',
    reverse : true,
    to :'User',
    unique : {
      to : true
    }
  },{
    name : 'mentioned',
    to : 'User'
  }]
}
