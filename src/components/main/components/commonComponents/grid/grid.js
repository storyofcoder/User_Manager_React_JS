import React from 'react';
import './grid.css'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Delete from '../../../../../assets/images/rubbish-bin.png'

const columns = [
    {
        id: 'sNo',
        label: '#',
        minWidth: 40
    },
    {
        id: 'name',
        label: 'User',
        minWidth: 150
    },
    {
        id: 'lastSeen',
        label: 'Last Signed in',
        minWidth: 170,
    },
    {
        id: 'role',
        label: 'Role',
        minWidth: 110,
    },
    {
        id: 'delete',
        label: '',
        minWidth: 50,
        align: 'right',
    },
];

let rows = [];
let allData = [];
let pageNo = 0;

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        allData = props.data;
        rows = allData.slice(pageNo * 4, (pageNo * 4) + 4);

        this.state = {
            index: 0,
            amount: 4,
            data: rows
        }
    }

    componentWillReceiveProps(props) {
        allData = props.data;
        rows = allData.slice(pageNo * 4, (pageNo * 4) + 4);
        this.setState({ data: rows });
    }

    /**
 * @description function is used to handle preview Page event.
 *
 * @parameters
 * @return
 */
    previewPage() {
        if (pageNo > 0) {
            pageNo -= 1;
            rows = allData.slice(pageNo * 4, (pageNo * 4) + 4);
            this.setState({ data: rows });
        }

    }

    /**
* @description function is used to handle next Page event.
*
* @parameters
* @return
*/
    nextPage() {
        if (((allData.length / 4) - 1) > pageNo) {
            pageNo += 1;
            rows = allData.slice(pageNo * 4, (pageNo * 4) + 4);
            this.setState({ data: rows });
        }
    }

    /**
* @description function is used to handle all other Page event.
*
* @parameters
* @return
*/
    setPage() {
        pageNo = 0;
        rows = allData.slice(pageNo * 4, (pageNo * 4) + 4);
        this.setState({ data: rows });
    }

    render() {
        return (
            <Paper >
                {(this.state.data.length > 0) &&
                    <TableContainer style={{ height: '348px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.data.map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column, index2) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {index2 == 0 && (pageNo * 4) + (index + 1)}
                                                        {index2 < 4 && value}
                                                        {index2 == 4 &&
                                                            <button id={index} onClick={() => this.props.delete(index)} className="deleteBtn">
                                                                <img src={Delete} className="deleteIcon"></img>
                                                            </button>}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                <div className="gridPagination">

                    {(pageNo > 0) && <button onClick={() => this.previewPage()}>Preview</button>}
                    {(pageNo > 0) && <button onClick={() => this.setPage(pageNo)}>{pageNo}</button>}
                    {(allData.length > 0) && <button className="activePage">{pageNo + 1}</button>}
                    {((allData.length / 4) > (pageNo + 1)) && <button onClick={() => this.nextPage()}>{pageNo + 2}</button>}
                    {((allData.length / 4) > (pageNo + 1)) && <button onClick={() => this.nextPage()}>Next</button>}

                </div>
            </Paper>
        );
    }
}
