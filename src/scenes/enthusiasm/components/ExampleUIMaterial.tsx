import * as React from 'react';
import './ExampleUIMaterial.scss';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { WithStyles, withStyles } from '@material-ui/core';
import { styles } from '../../../assets/styles/common-styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props extends WithStyles<typeof styles> {
    children?: React.ReactNode;
    className?: string;
}

class ExampleUIMaterial extends React.Component<Props> {

    render() {
        const { classes } = this.props;
        console.log(this.props);

        return (
            <div className='example'>
                <div className="button-demo">
                    <h4>Input Component Demo</h4>
                    {/* Override global */}
                    <Button variant="contained" className="Usonia__Button">Default</Button>
                    {/* Override separate */}
                    <Button variant="contained" className={classes.buttonsStyle}>Default</Button>

                    {/* Default button */}
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" disabled>Disabled</Button>
                    <Button variant="contained" color="primary" href="#contained-buttons">Link </Button>
                </div>
                <div>
                    <h4>Checkbox</h4>
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
                <div>
                    <h4>Text Input</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid justify="center">
                                <Grid >
                                    <TextField id="standard-basic" label="Username" />
                                </Grid>
                                <Grid>
                                    <TextField id="standard-basic" label="Password" />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
                <div>
                    <h4>Card</h4>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Title</Typography>
                            <Typography>Content</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ExampleUIMaterial);