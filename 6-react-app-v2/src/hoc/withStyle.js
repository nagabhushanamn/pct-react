import React, { Component } from 'react';

export function withStyle(InputComponent) {

    class Container extends Component {
        render() {
            return (
                <div className="card card-body">
                    <ul>
                        <InputComponent />
                    </ul>
                </div>
            );
        }
    }

    Container.displayName = `withStyle<${InputComponent.name}>`

    return Container;

}