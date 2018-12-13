import React, { Component } from 'react';

/*export default */class PracticeCounter extends Component {

    /**
     * state = {
        count: 0,
        tags: [ 'tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return (
            <div>
                { this. state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()}
            </div>
        );
    }
     */

    state = {
        count: 0,
        tags: [
            'tag1', 'tag2', 'tag3'
        ]
        // imgUrl: 'https://picsum.photos/150'
    };
    styles = {
        fontSize: 12,
        fontWeight: "bold"
    }
    render() {
        // let classesName = this.getBadgeClasses();

        return (
            <React.Fragment>
                {
                    /* <img src={this.state.imgUrl} alt=""/> */
                    /**
                     * we can directly use javascript inline
                     *  <span style={{ fontSize : 30 }} className="badge badge-primary m-2">{this.formatCount()}</span> 
                     * */
                }
                <span /*style={this.styles} */ className={this.getBadgeClasses()/*classesName*/} >{this.formatCount()}</span>
                <button className="btn btn-priamry btn-sm" >Increment</button>
                <ul>
                    {
                        this.state.tags.map(tag => <li key={tag}>{tag}</li>)
                    }
                </ul>
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classesName = "badge m-2 badge-";
        classesName += (this.state.count === 0) ? "warning" : "primary";
        return classesName;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;

        //we can return a jsx expression also
        // return count === 0 ? <h1>Zero</h1> : count;
    }
}

// object destructor
class practic extends Component {
    state = {}
    render() {
        const { onReset,onDelete , onIncrement }= this.props;
        return (<div>
            <button onClick={onReset}
                className="btn btn-primary btn-sm m-2">
                Reset</button>
            {counters.map(counter =>
                <Counter key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={counter}>
                </Counter>)}
        </div>);
    }
}

export default practic;
