import * as React from 'react';
import './Counter.scss';
import { IEnthusiasm } from '../types';
export interface Props {
    languageName: string;
    enthusiasm: IEnthusiasm;
    onIncrement?: () => void;
    onDecrement?: () => void;
}
// interface State {
//     enthusiasmLevel: number;
//     languageName: string;
// }
class Hello extends React.Component<Props> {
    // constructor(props: Props) {
    //     super(props);
    //     this.state = { languageName: this.props.languageName, enthusiasmLevel: this.props.enthusiasmLevel || 1 };
    //     this.updateEnthusiasm = this.updateEnthusiasm.bind(this);
    //     this.onIncrement = this.onIncrement.bind(this);+
    //     this.onDecrement = this.onDecrement.bind(this);
    // }
    render() {
        const { languageName, enthusiasm, onIncrement, onDecrement } = this.props;
        console.log(this.props);
        debugger;
        return (
            <div className='hello'>
                <div className='greetings'>
                    {languageName ? languageName : enthusiasm.languageName }{enthusiasm.enthusiasmLevel}
                </div>
                <button onClick={onDecrement}> - </button>
                <button onClick={onIncrement}> + </button>
            </div>
        );
    }

    // updateEnthusiasm(inputEnthusiasm: number) {
    //     this.setState(
    //         {
    //             currentEnthusiasm: inputEnthusiasm
    //         }
    //     );
    // }
    // onIncrement() {
    //     return this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    // }
    // onDecrement() {
    //     return this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
    // }
}

export default Hello;
