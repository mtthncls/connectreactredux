import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
    <div>
        <p>{counter}</p>
        <button id="add" onClick={() => dispatch({ type: 'ADD' })}>add1</button>
        <button id="remove" onClick={() => dispatch({ type: 'REMOVE' })}>remove1</button>
        <button id="add10" onClick={() => dispatch({ type: 'ADD 10' })}>add10</button>
        <button id="remove10" onClick={() => dispatch({ type: 'REMOVE 10' })}>remove10</button>
        <button id="reset" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
);

export default connect(
    mapStateToProps
)(CounterComponent);
