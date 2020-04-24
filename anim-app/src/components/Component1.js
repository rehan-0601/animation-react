import React from 'react'
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}>
            {props => (
                <div style={props}>
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>Voluptate amet excepteur veniam reprehenderit in. Cillum officia fugiat anim do duis qui incididunt excepteur quis deserunt Lorem. Nisi occaecat duis fugiat exercitation. Consequat exercitation consectetur ut officia dolor sunt occaecat deserunt ut commodo ut eu et nulla. Est officia Lorem fugiat incididunt incididunt non.</p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}>
                            {props => (
                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}

        </Spring>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}