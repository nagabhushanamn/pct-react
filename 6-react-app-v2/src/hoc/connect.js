import React, { Component } from 'react';

import store from '../store'

export function connect(InputComponent, callback) {

    class Container extends Component {
        constructor(props) {
            super(props)
            let state = callback(store.getState())
            this.state = {
                ...state
            }
        }
        componentDidMount() {
            store.subscribe(() => {
                //..
            })
        }
        componentWillUnmount() {
            //..
        }
        commonHandleLogic() {
            //..
        }
        render() {
            return (
                <div className="card card-body">
                    <ul>
                        <InputComponent {...this.state} />
                    </ul>
                </div>
            );
        }
    }

    Container.displayName = `Connect<${InputComponent.name}>`

    return Container;

}