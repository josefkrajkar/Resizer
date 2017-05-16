/*
import React from 'react';
import ReactDOM from 'react-dom';
*/
const divStyle = {
        draggable: false,
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0,
    },

contStyle = {
        width: "329px",
        height: "254px",
        },

imgStyle = {
	      width: '100%',
	      height: '100%',
        draggable: false,
    	  },

Container = React.createClass ({
        render: function() {
            return (<div style={contStyle}>{this.props.children}</div>);
        }
    }),


Obrazek = React.createClass ({
    	getInitialState: function () {
	     return imgStyle;
	    },
	    render: function() {
	     return (<img src={this.props.zdroj} draggable="false" style={this.state}/>);
	    }
    }),

Resizer = React.createClass ({
	    getInitialState: function() {
         return divStyle;
        },
        endChange: function () {
	        window.removeEventListener('mousemove',this.moveAndChange,false);
        },
        startChange: function(e) {
	        this.setState({
                startX: e.clientX,
                startY: e.clientY,
                startWidth: parseInt(document.defaultView.getComputedStyle(e.target).width, 10),
                startHeight: parseInt(document.defaultView.getComputedStyle(e.target).height, 10),
            });
 	        window.addEventListener("mousemove",this.moveAndChange,false);
        },
        moveAndChange: function(e) {
            if (this.props.type === "horizontal" || this.props.type === "both") {
                this.setState({
                    width: (this.state.startWidth + e.clientX - this.state.startX) + 'px',
                    height: this.state.startHeight,
                })
            }
            if (this.props.type === "vertical" || this.props.type === "both") {
                this.setState({
                    height: (this.state.startHeight + e.clientY - this.state.startY) + 'px',
                })
            }
        },
        render: function () {
	        return(
                <div style={this.state} onMouseDown={this.startChange} onMouseUp={this.endChange} onMouseOut={this.endChange}>{this.props.children}</div>
            );
        }
    });

// ========================================

ReactDOM.render(
  <div>
            <p>Horizontal Resizer:</p>
            <Container>
                <Resizer type="horizontal"><Obrazek zdroj="https://cdn.authoritynutrition.com/wp-content/uploads/2014/09/avocado-on-a-wooden-table.jpg"/></Resizer>
            </Container>
            <p>Vertical Resizer:</p>
            <Container>
                <Resizer type="vertical"><Obrazek zdroj="https://cdn.authoritynutrition.com/wp-content/uploads/2014/09/avocado-on-a-wooden-table.jpg"/></Resizer>
            </Container>
            <p>Both size Resizer:</p>
            <Container>
                <Resizer type="both"><Obrazek zdroj="https://cdn.authoritynutrition.com/wp-content/uploads/2014/09/avocado-on-a-wooden-table.jpg"/></Resizer>
            </Container>
        </div>,
  document.getElementById('root')
);
