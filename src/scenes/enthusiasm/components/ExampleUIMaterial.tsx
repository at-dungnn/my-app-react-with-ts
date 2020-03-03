import * as React from 'react';
import './ExampleUIMaterial.scss';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


export interface Props {
    // name: string;
}

class ExampleUIMaterial extends React.Component<Props> {

    // constructor(props: Props) {
    //     super(props);

    // }

    render() {

        return (
            <div className='example'>
                <div className="button-demo">
                    <h4>Input Component Demo</h4>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" disabled>Disabled</Button>
                    <Button variant="contained" color="primary" href="#contained-buttons">Link </Button>
                </div>
                <div>
                    <Checkbox
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Checkbox
                        defaultChecked
                        value="secondary"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <Checkbox value="uncontrolled" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    <Checkbox disabled value="disabled" inputProps={{ 'aria-label': 'disabled checkbox' }} />
                    <Checkbox
                        disabled
                        checked
                        value="disabled checked"
                        inputProps={{ 'aria-label': 'disabled checked checkbox' }}
                    />
                    <Checkbox
                        defaultChecked
                        value="indeterminate"
                        indeterminate
                        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
                    />
                    <Checkbox
                        defaultChecked
                        color="default"
                        value="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    <Checkbox
                        defaultChecked
                        size="small"
                        value="small"
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                </div>
            </div>
        );
    }
}

export default ExampleUIMaterial;