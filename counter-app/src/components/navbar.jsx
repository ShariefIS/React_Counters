import React, { Component } from 'react';

//stateLess Functional Component
//using object destructor
const NavBar = ({ totalCounters}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar {" "}
                <span className="badge badge-pill badge-secondary">
                {totalCounters}
                </span>
            </a>
        </nav>
    );
};

// const NavBar = props => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 NavBar {" "}
//                 <span className="badge badge-pill badge-secondary">
//                 {props.totalCounters}
//                 </span>
//             </a>
//         </nav>
//     );
// };

//using a class without a state can be converted to stateless functional 
//component as made above
// class NavBar extends Component {
//     state = {}
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     NavBar {" "}
//                     <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

export default NavBar;
