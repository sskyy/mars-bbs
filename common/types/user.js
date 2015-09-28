module.exports ={
  type : 'User',
  primary : 'id',
  fields : {
    name : 'STRING',
    age : 'INT',
    gender : {
      type : 'ENUM',
      values : ['male','female']
    },
  }
}
