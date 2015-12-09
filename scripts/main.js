var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  render : function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }

});

// <Header />
var Header = React.createClass({
  render : function() {
    return (
      <p>Header</p>
    )
  }
})

// <Order />
var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
});

// <Inventory />
var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
});

/*
  <StorePicker />
*/

var StorePicker = React.createClass({

  render : function() {
    return (
      <form className="store-selector">
        {/* creating a store  */}
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeId" />
        <input type="Submit" />
      </form>
    )
  }

});

// ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
ReactDOM.render(<App/>, document.querySelector('#main'));
