import React from 'react';
import './settings.css';
import AddDialog from '../commonComponents/dialog/dialog';
import Grid from '../commonComponents/grid/grid';

class Settings extends React.Component {
  constructor() {
    super();

    let data = localStorage.getItem('tableTata');
    if (data) {
      data = JSON.parse(data);
      data = data.data;
    } else
      data = [];

    this.state = {
      tableData: data,
      dialogStatus: false
    };
  }

  /**
* @description function is used to delete the given index row from the table and local storage.
*
* @parameters index
* @return void
*/
  deleteRow(index) {
    let data = this.state.tableData;
    data.splice(index, 1);
    localStorage.setItem('tableTata', JSON.stringify({ data }));
    this.setState({ tableData: data, dialogStatus: false });
  }

  /**
* @description function is used to add the user details to the table and local storage.
*
* @parameters object
* @return void
*/
  addRow(obj) {
    let data = this.state.tableData;
    let o = { sNo: '', name: obj.name, lastSeen: "Few sec. ago", role: obj.role, delete: '' }
    data.unshift(o);
    localStorage.setItem('tableTata', JSON.stringify({ data }));
    this.setState({ tableData: data, dialogStatus: false });
  }

  /**
* @description function is used handle open add user dialog component.
* @parameters void
* @return void
*/
  openDialog() {
    (this.state.dialogStatus) ? this.setState({ dialogStatus: false }) : this.setState({ dialogStatus: true });
  }

  render() {
    return (
      <div className="settingContainer">
        <button variant="outlined" className="addUser" onClick={() => this.openDialog()}>
          ADD USER
      </button>
        <AddDialog open={this.state.dialogStatus} add={(obj) => this.addRow(obj)} />
        <div className="tableGrid">
          <Grid data={this.state.tableData} delete={(index) => this.deleteRow(index)} />
        </div>
      </div>
    );
  }
}

export default Settings;
