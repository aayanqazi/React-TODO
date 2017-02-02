var arr = [];
var Component = React.createClass({
    getInitialState: function () {
        return {
            text: this.props.DefaultValue,
            rar: [],
            count: 0
        }
    },
    propTypes: {
        DefaultValue: React.PropTypes.string.isRequired
    },
    changes: function (e) {
        e.preventDefault();
        return this.setState({
            text: e.target.value
        })
    },
    list: function (e) {
 e.preventDefault();
    if(arr.length < 20)
    {
        arr.push(this.state.text);
        this.setState({
            count: parseInt(((arr.length/20)*100)),
            rar: arr
        });
    }
    else
    {
        alert("Sorry Your List Capacity Is Full")
    }
    },
    removes: function (ev) {
         ev.preventDefault();
        arr.splice(ev.target.dataset.col,1);
        this.setState({
            count: parseInt(((arr.length/20)*100)),
            rar: arr
        });
    },
    render: function () {
        return React.DOM.div(null,React.DOM.div({className:"progress"},React.DOM.div({className:"progress-bar","aria-valuenow":this.state.count ,"aria-valuemin":"0",style:{width:this.state.count+"%"}},this.state.count)), React.DOM.form(null, React.DOM.input({
            value: this.state.text,
            onChange: this.changes
        })), React.DOM.button({ onClick: this.list }, "ADD"), React.DOM.ol(null, this.state.rar.map(function (i, idx) {
            return React.DOM.li({ key: idx}, i + " ", React.DOM.button({'data-col': idx ,onClick: this.removes}, " Delete"))
        },this)))
    }

});


ReactDOM.render(
    React.createElement(Component, {
        DefaultValue: 'Enter Element'
    }),
    document.getElementById('app')
)   