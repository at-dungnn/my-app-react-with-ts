import * as React from 'react';
import './ExampleUIMaterial.scss';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
// import { WithStyles, withStyles } from '@material-ui/core';
// import { styles } from '../../../assets/styles/common-styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styles } from '../../../assets/styles/common.styles';


// interface Props extends WithStyles<typeof styles> {
//     children?: React.ReactNode;
//     className?: string;
// }
console.log('button styles', styles);
interface Props {

}
class ExampleUIMaterial extends React.Component<Props> {

    render() {
        // const { classes } = this.props;

        console.log(this.props);

        return (
            <div className='example'>
                <div className="button-demo">
                    <h4>Input Component Demo</h4>
                    {/* Default button */}
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    {/* Custom styles */}
                    <Button variant="contained" color="secondary" style={styles.buttonsStyle}>Secondary</Button>
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
                </div>
                <div>
                    <h4>Text Input</h4>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center">
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
                            <Button variant="contained" color="primary">Primary</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        );
    }
}
export default ExampleUIMaterial;

// export default withStyles(styles)(ExampleUIMaterial);