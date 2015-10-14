module.exports ={
  type : 'Log',
  primary : 'id',
  fields : {
    content : 'VARCHAR',
    type : 'CHAR',
  },
  relations : [{
    name : 'mentioned',
    to : 'User'
  }]
}
