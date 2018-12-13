import React, { Component } from 'react';

class Counter extends Component {
    /**removing child state dependencies in parent */
    // state = {
    //     value: this.props.counter.value,
    //     //we cannot modify props
    // };

    // constructor() {
    //     super();
    //     // console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    /**
     * instead using the constructor and calling the super and base method everytime
     * we can use arrow function which doesnt require 'this' to call it.
     */

    /**removing child state 'this.state.value' dependencies in parent  */
    // handleIncrement = product => {
    //     // console.log('Increment Clicked', this);
    //     /**
    //      * we dont directly change the state as  this.state.count++;
    //      * but we use a method of Component class 'this.setState' which we inherit 
    //      * to change the variables in the state object
    //      */
    //     // console.log(product);
    //     this.setState({ value: this.state.value + product.id });

    // }
    /**
     * To give parameters to our handler we made a new method
     * to make it less messy we can call our handler with a inline arrow function
     * in the onclick method
    doHandleIncrement = () =>{
        this.handleIncrement({id:1});
    }
    */

    render() {
        let dataObj = {
            id: 1
        }
        // console.log('prps',this.props);
        return (
            <div>
                {/* 
                can be used to get complex objects
                {this.props.children} */}
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button
                    onClick={
                        /*this.doHandleIncrement { id: 1 }*/
                        //removing child state dependance for value increment () => this.handleIncrement(dataObj)
                        () => this.props.onIncrement(this.props.counter)
                    }
                    className="btn btn-secondary btn-sm m-2" >Increment</button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2" >Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classesName = "badge m-2 badge-";
        //removing child state 'this.state.value' dependancy for parent
        // classesName += (this.state.value === 0) ? "warning" : "primary";
        classesName += (this.props.counter.value === 0) ? "warning" : "primary";
        return classesName;
    }

    formatCount() {
        //removing child state 'this.state' dependancy for parent
        // const { value } = this.state;
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;

        //we can return a jsx expression also
        // return count === 0 ? <h1>Zero</h1> : count;
    }

}

export default Counter;