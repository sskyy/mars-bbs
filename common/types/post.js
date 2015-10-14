module.exports ={
  type : 'Post',
  primary : 'id',
  fields : {
    content : 'varchar',
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
