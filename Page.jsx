'use strict'

var React = require("react")

function print( obj ){
  if( typeof obj == "object" ){
    return JSON.stringify( obj)
  }else if( typeof obj == "string"){
    return "'"+obj+"'"
  }else if( typeof obj == "number" ){
    return obj
  }
}

function makeContextStr( key, value){
  if( typeof value === 'function ') return ''
  return "window.context."+key+"="+print(value)
}



///////////////////////
//     Page Container
///////////////////////
var  Page = React.createClass({
  render() {
    var contextKeys = Object.keys(this.props.context)
    var that = this
    var entryNode =<div id="entry"></div>
    var Entry
    var entry

    //TODO server-rendering
    if( this.props.entry !== undefined){
      Entry = this.props.entry
      entry = React.renderToString(<Entry {...this.props.entryProps}/>)
      entryNode = <div dangerouslySetInnerHTML = {{__html:entry}} id="entry"></div>
    }else{
      entryNode = <div id='entry'></div>
    }


    //save context defined in `spec`
    var contextScript = "window.context={};" + contextKeys.map(function(key){
      return makeContextStr(key, that.props.context[key] )
    }).join(";")

    var mountScript = "React.render(React.createElement(Entry), document.getElementById('entry'))"

    return <html>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Pragma" content="no-cache"/>
      <meta httpEquiv="Expires" content="-1"/>
      <title>Mars Boilerplate</title>
      <script dangerouslySetInnerHTML = {{__html:contextScript}}></script>
      <script src={`/${this.props.base}/vendor/es5-shim.min.js`}></script>
      <script src={`/${this.props.base}/vendor/es5-sham.min.js`}></script>
      <link href={`/${this.props.base}/${this.props.name}.css`} rel="stylesheet" type="text/css" />
    </head>
    <body>
      {entryNode}
      <script src={`/${this.props.base}/vendor/cdn-react0.13.3.js`}></script>
      <script src={`/${this.props.base}/common.js`}></script>
      <script src={`/${this.props.base}/${this.props.name}.js`}></script>
      <script dangerouslySetInnerHTML = {{__html:mountScript}}></script>
    </body>
    </html>;
  }
})

module.exports = Page;
