import React,{Component} from 'react';

//Hlavni trida ovlivnujici beh resizer komponenty
class Resizer extends Component {

    //metoda tridy s nastavenim stylu komponenty + nekolik pomocnych a testovacich vlastnosti
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

    //metoda volana po zvednuti tlacitka mysi, nebo po opusteni resizeru
    endChange() {
        this.setState({
            clicked: false,
        });
    }

    //metoda volana po zmacknuti tlacitka mysi - zahajeni zmeny velikosti
    startChange(i) {
        this.setState({
            startX: i.clientX,
            startY: i.clientY,
            startWidth: parseInt(document.defaultView.getComputedStyle(i.target).width,10),
            startHeight: parseInt(document.defaultView.getComputedStyle(i.target).height,10),
            clicked: true,
        });
    }

    //metoda volana pri pohybu mysi- zajistuje dynamickou zmenu velikosti podle daneho typu komponenty
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

    //metoda pro renderovani vysledku
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
