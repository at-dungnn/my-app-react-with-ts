
import Hello from '../components/Hello';
import { IncrementEnthusiasm, DecrementEnthusiasm, incrementEnthusiasm, decrementEnthusiasm } from '../actions';
import { IStoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasm }: IStoreState) {
    return {
        enthusiasm
    }
}
export function mapDispatchToProps(dispatch: Dispatch<IncrementEnthusiasm | DecrementEnthusiasm>) {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
