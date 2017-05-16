import React from 'react';

//Hlavni trida ovlivnujici beh resizer komponenty
const Resizer = React.createClass ({

    //metoda tridy s nastavenim stylu komponenty + nekolik pomocnych a testovacich vlastnosti
    getInitialState: function() {
        return {
        startX: 0,
        startY: 0,
        startWidth: 0,
        startHeight: 0,
        };
    },
    //metoda volana po zvednuti tlacitka mysi, nebo po opusteni resizeru
    endChange: function () {
        window.removeEventListener('mousemove',this.moveAndChange,false);
    },

    //metoda volana po zmacknuti tlacitka mysi - zahajeni zmeny velikosti
    startChange: function(e) {
        this.setState({
            startX: e.clientX,
            startY: e.clientY,
            startWidth: parseInt(document.defaultView.getComputedStyle(e.target).width,10),
            startHeight: parseInt(document.defaultView.getComputedStyle(e.target).height,10),
        });
        window.addEventListener("mousemove",this.moveAndChange,false);
    },

    //metoda volana pri pohybu mysi- zajistuje dynamickou zmenu velikosti podle daneho typu komponenty
    moveAndChange: function(e) {
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
    },

    //metoda pro renderovani vysledku
    render: function() {
        return(
            <div style={this.state} onMouseDown={this.startChange} onMouseUp={this.endChange} onMouseOut={this.endChange}>{this.props.children}</div>
        );
    }
});

export default Resizer;
