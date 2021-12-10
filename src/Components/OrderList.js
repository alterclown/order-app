import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import axios from 'axios';
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class OrderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderList:[]

        }
    }

    componentDidMount() {
        axios.get(`https://localhost:44351/api/Order/GetOrderList`)
          .then(res => {
            this.setState({ orderList:res });
          })
      }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <button component={Link} to={{path:'/orderEntry'}}>Create</button>
                <button>Edit</button>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.table}>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                </TableCell>
                                <TableCell align="right">Test</TableCell>
                                <TableCell align="right">Test</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">Test</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }
}
export default withStyles(useStyles)(OrderList);