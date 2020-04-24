import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 1000, duration: 1000 }}>
                {props => (
                    <div style={props}>
                        <div style={c2Style}>
                            <h1>Component 2</h1>
                            <p>Voluptate amet excepteur veniam reprehenderit in. Cillum officia fugiat anim do duis qui incididunt excepteur quis deserunt Lorem. Nisi occaecat duis fugiat exercitation. Consequat exercitation consectetur ut officia dolor sunt occaecat deserunt ut commodo ut eu et nulla. Est officia Lorem fugiat incididunt incididunt non.</p>
                            <button style={btn} onClick={this.props.toggle}>
                                Toggle Component 3
                            </button>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    textTransform: "uppercase",
    margin: "15px 0"
};

export default Component2
