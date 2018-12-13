import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    //leveling up to app.js the state properties for other components to access
    // state = {
    //     counters: [
    //         { id: 1, value: 4 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 },
    //         { id: 5, value: 0 },
    //     ]
    // };

    // handleReset = () => {
    //     const counters = this.state.counters.map(c => {
    //         c.value = 0;
    //         return c;
    //     });
    //     this.setState({ counters });
    // };

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index]={...counter};
    //     counters[index].value++;
    //     this.setState({counters});
    //     // console.log(counter);
    // };

    // handleDelete = counterId => {
    //     // console.log('Even Handler Called',counterId);
    //     const counters = this.state.counters.filter(c => c.id !== counterId);
    //     this.setState({ counters });
    // };

    render() {
        return (
            <div>
                <button onClick={this.props.onReset}// changed to props as state level shifted to app.js{this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset</button>
                {/*
                instead of hardcoding this multiple times we
                make an array and use that
                <Counter />
                <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
                {this.props.counters.map(counter =>//changed to props as state level shifted to app.js {this.state.counters.map(counter =>
                    /**
                     * key is a property to uniquely define the attribute
                     * value and selected will the this.props properties
                     */
                    <Counter key={counter.id}
                        onDelete={this.props.onDelete}// changed to props as state level shifted to app.js {this.handleDelete}
                        onIncrement={this.props.onIncrement} // changed to props as state level shifted to app.js {this.handleIncrement}
                        counter={counter}
                        /*
                        instead of sending so many values u can send 
                        one objects as done above
                        value={counter.value}
                        id={counter.id}
                        selected={true} */>
                        {/* can be used in the counter.jsk as props.children 
                    besy for sending complex objects <h4>Counter #{counter.id}</h4> */}
                    </Counter>)}
            </div>
        );
    }
}

export default Counters;