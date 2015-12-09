var React = require('react');
var ReactDOM = require('react-dom');

/*
  <StorePicker />
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <p>hello</p>
    )
    // return React.createElement('p', {className: "testing"}, 'content')
  }

});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
