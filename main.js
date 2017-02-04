var Sidebar = React.createClass({
    getInitialState:function()
    {
        return {
             count: 0
        }
    },
    /*componentWillRecieveProp(newProp){
        this.setState({
            count:this.props.name
        })
    },*/
    render: function(){
        return (<div id="sidebar">
            <div className="col-sm-3 col-md-2 sidebar hidden-xs" id="side">
                    <div className="row">
                        <div className="hidden-xs col-md-12">
                            
                                <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASQAAAAJDJhZWE3OWQ3LWNmYWEtNDg3OS1iYTRmLTMzZWYwYzczZDRiYQ.jpg" alt="PROFILE PICTURE" className="img-responsive" />
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
                    <p>Capacity {this.props.name}/ 100 </p>
                    <div className="progress">
                    <div className="progress-bar" aria-valuenow={this.props.name} aria-valuemin="0"  aria-valuemin="100" style={{width:this.props.name+"%"}}>
                    {this.props.name}%
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
            <nav className="navbar navbar-default navbar-static-top hidden-xs">
                <div className="container-fluid">
                <ul className="nav navbar-nav navbar-right">{ this.props.items.map(function(m, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    return <li key={index} className={style} onClick={self.clicked.bind(self, index)}><a href="#">{m}</a></li>;
                }) }   
                </ul>
                </div>
                   </nav>
                   
                
            </div>
        );

    }
});
var arr = [];
var arr2=[];
var Component = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            number:'',
            rar: [],
            rar2:[],
            count: 0,
            naming:'',
            phonenumber:''
        }
    },
    /*propTypes: {
        DefaultValue: React.PropTypes.string.isRequired,
        Default: React.PropTypes.string.isRequired
    },*/
    changes: function (e) {
        e.preventDefault();
        return this.setState({
            text: e.target.value
        })
    },
    changesPhone:function(ev)
    {
        ev.preventDefault();
        return this.setState({
            number: ev.target.value
        })
    },
    list: function (e) {
 e.preventDefault();
    if(arr.length < 20)
    {
        arr.push({name:this.state.text,number:this.state.number});
        this.setState({
            count: parseInt(((arr.length/20)*100)),
            rar: arr,
            rar2:arr2,
            naming:"Name",
            phonenumber:"Phone Number",
            text:"",
            number:""
        }
        )
      this.props.onChange(parseInt(((arr.length/20)*100)));
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
            count: parseFloat(((arr.length/20)*100)),
            rar: arr,
            text:"",
            number:""
        });
        if(arr.length <= 0)
        {
            this.setState({ 
                naming:"",
            phonenumber:"",})
           
        }
         this.props.onChange(parseInt(((arr.length/20)*100)));;
    },
    render: function () {
        return React.DOM.div({className:"container"},React.DOM.div({className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 col-xs-offset-3 col-xs-9"},React.DOM.div(null, React.DOM.form({className:"form-inline"},React.DOM.div({className:"form-group"}, React.DOM.input({
            value: this.state.text,
            onChange: this.changes,
            className:"form-control",
            name:"names",
            placeholder : "Enter Name",
        }),React.DOM.input({
            value: this.state.number,
            onChange: this.changesPhone,
            name:"number", 
            className:"form-control",
            placeholder : "Enter Phone Number",
            
        }), React.DOM.button({ onClick: this.list ,type:"submit",className:"btn btn-primary" }, "ADD")),<br />,<br />, React.DOM.table({className:"table table-responsive table-striped"},React.DOM.thead(null,React.DOM.th(null,this.state.naming),React.DOM.th(null,this.state.phonenumber)),React.DOM.tbody(null, this.state.rar.map(function (i, idx) {
            return React.DOM.tr({key: idx},React.DOM.td(null, i['name']) ,React.DOM.td(null, React.DOM.a({href:'tel:'+i['number']},i['number'])), React.DOM.button({'data-col': idx ,onClick: this.removes}, " Delete"))
        },this)))))))
    }

});
var Parents = React.createClass({
    getInitialState:function()
    {
        return {
            counts:0
        }
    },
   handleValue:function(val)
   {
       this.setState({
           counts:val
       })
   },
    render:function(){
        return (
            <div>
            <Sidebar name={this.state.counts} /> <MenuExample items={ ['Home', 'Contact us'] } /><Component  onChange = {this.handleValue} placeholder="Number" />
            </div>
            )
    }
})
ReactDOM.render(
    <Parents />,
    document.getElementById('main')
);
