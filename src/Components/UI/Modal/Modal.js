import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.show !== this.props.show;
    }

    // componentWillUpdate() {
    //     console.log('[Modal] willupdate');
    // }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {/* children can basically have anything passed to it */}
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;