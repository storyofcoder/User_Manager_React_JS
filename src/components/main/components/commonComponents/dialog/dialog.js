import React from 'react';
import './dialog.css'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddUser from '../../../../../assets/images/add-user.png'

class AddDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      role: 'Admin',
    }
  }

  componentWillReceiveProps = (props) => {
    this.setState({ open: props.open })
  }

  /**
 * @description function is used to close the dialog.
 *
 * @parameters void
 * @return void
 */
  handleClose = () => {
    this.setState({ open: false })
  };

  /**
 * @description function is used to add user in table or response to parent component.
 *
 * @parameters void
 * @return void
 */
  add = () => {
    this.props.add(this.state);
    this.setState({ name: '', role: 'Admin' });
  };


  nameEdit = (event) => {
    this.setState({ name: event.target.value });
  }

  roleChange = (event) => {
    this.setState({ role: event.target.value });
  }

  render() {
    return (
      <div>
        <Dialog open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="form-dialog-title"
          fullWidth='md'
          maxWidth='md'>
          <div className="dialogContainer">
            <div className="desc">
              <img src={AddUser} className="addUserIcon"></img>

              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
            <div className="form">
              <div className="formTitle">User Information</div>
              <div></div>
              <div className="inputLabel">Email Id of user</div>
              <TextField fullWidth
                required
                id="outlined-required"
                variant="outlined"
                value={this.state.name}
                onChange={this.nameEdit}
              />
              <div>&nbsp;</div>
              <div className="inputLabel">Role</div>

              <FormControl variant="outlined" fullWidth>
                <Select
                  native
                  value={this.state.role}
                  onChange={this.roleChange}
                >
                  <option value='Owner'>Owner</option>
                  <option value='Admin'>Admin</option>
                  <option value='Sales'>Sales</option>
                </Select>
              </FormControl>

              <div className="buttons">
                <button onClick={() => this.handleClose()} className="cancel btn">Cancel</button>
                <button onClick={() => this.add()} className="add btn">Add</button>
              </div>

            </div>
          </div>
        </Dialog>
      </div >
    );
  }
}

export default AddDialog;
