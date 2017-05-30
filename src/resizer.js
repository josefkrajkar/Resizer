import React,{Component} from 'react';

//Main class responsible for the behaviour of the Resizer component
class Resizer extends Component {

    //method with setting of the several important properties
    constructor() {
        super();
        this.state = {
            startX: 0,
            startY: 0,
            startWidth: 0,
            startHeight: 0,
            clicked: false,
        };
    }

    //method called after the mousebutton is released or after the mouse curser is out of the Resizer component
    endChange() {
        this.setState({
            clicked: false,
        });
    }

    //method called after the pressing of the mouse button - it will start chnages of width or height
    startChange(i) {
        this.setState({
            startX: i.clientX,
            startY: i.clientY,
            startWidth: parseInt(document.defaultView.getComputedStyle(i.target).width,10),
            startHeight: parseInt(document.defaultView.getComputedStyle(i.target).height,10),
            clicked: true,
        });
    }

    //method called after the move of the mouse cursor. If the left mouse button is pressed, it will change the width or height of the component dynamically
    moveAndChange(e) {
        if (this.state.clicked) {
            if (this.props.type === "horizontal" || this.props.type === "both") {
                this.setState({
                    width: (this.state.startWidth + e.clientX - this.state.startX) + 'px',
                    height: this.state.startHeight,
                });
            }
            if (this.props.type === "vertical" || this.props.type === "both") {
                this.setState({
                    height: (this.state.startHeight + e.clientY - this.state.startY) + 'px',
                })
            }
        }
    }

    //method for proper rendering 
    render() {
        return(
            <div
                style={this.state}
                onMouseMove={(e) => this.moveAndChange(e)}
                onMouseDown={(e) => this.startChange(e)}
                onMouseUp={() => this.endChange()}
                onMouseOut={() => this.endChange()}>
                {this.props.children}
            </div>
        );
    }
}

export default Resizer;
