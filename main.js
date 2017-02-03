var Sidebar = React.createClass({
    getInitialState:function()
    {
        return {
             count: 0
        }
    },
    render: function(){
        return (<div id="sidebar">
            <div className="col-sm-3 col-md-2 sidebar hidden-xs" id="side">
                    <div className="row">
                        <div className="hidden-xs col-md-12">
                            
                                <img src="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" alt="PROFILE PICTURE" className="img-responsive" />
                          <br />
                            <center><p>  Arsalan Sabir </p></center>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <ul className="nav nav-sidebar">
                        <li className="active"><a href="#"><span><i className="glyphicon glyphicon-earphone"></i></span> <span> Phone Book</span> </a> </li>

                    </ul>
                    <div className="Last">
                    <div className="progress">
                    <div className="progress-bar" aria-valuenow={this.state.count} aria-valuemin="0"  aria-valuemin="100" style={{width:"80%"}}>
                    80%
                    </div>
                    </div>
                    
                    <p>@copyright 2017</p>
                    </div>
                </div></div>)
    }
});
var MenuExample = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },
    clicked: function(index){
        this.setState({focused: index});
    },
    render: function() {
        var self = this;
        return (
            <div>
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">{ this.props.items.map(function(m, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li className={style} onClick={self.clicked.bind(self, index)}><a href="#">{m}</a></li>;
                }) }   
                </ul>
                </div>
                   </nav>
                   
                
            </div>
        );

    }
});
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
        return React.DOM.div({className:"container"},React.DOM.div({className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2"},React.DOM.div(null, React.DOM.form(null, React.DOM.input({
            value: this.state.text,
            onChange: this.changes
        })), React.DOM.button({ onClick: this.list }, "ADD"), React.DOM.ol({className:"list-group"}, this.state.rar.map(function (i, idx) {
            return React.DOM.li({ key: idx,className:"list-group-item"}, i + "\t \t \t \t ", React.DOM.button({'data-col': idx ,onClick: this.removes}, " Delete"))
        },this)))))
    }

});
var Parents = React.createClass({
   
    render:function(){
        return (
            <div>
            <Sidebar /> <MenuExample items={ ['Home', 'About', 'Contact us'] } /><Component DefaultValue= 'Enter Element' />
            </div>
            )
    }
})
ReactDOM.render(
    <Parents />,
    document.getElementById('main')
);
