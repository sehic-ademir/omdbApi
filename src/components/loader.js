import React, { Component } from 'react';
class Loader extends Component {

    render() { 
        return ( <div className="fa-2x py-4 my-4"><i className="p-4 m-4 fa fa-circle-o-notch fa-spin fa-4x text-warning"></i></div> );
    }
}
 
export default Loader;