import React from 'react';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default component => {
  const customers = component.state.customers;

  const iconButtonElement = (
    <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
      <MoreVertIcon color="grey" />
    </IconButton>
  );

  const rightIconMenu = customer =>
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>
        <Link to={'/customers/' + customer.id}>Show</Link>
      </MenuItem>
      <MenuItem>
        <Link to={'/customers/' + customer.id + '/edit'}>Edit</Link>
      </MenuItem>
      <MenuItem>
        <span
          onClick={event => {
            component.handleDialogOpen(customer);
          }}
        >
          Delete
        </span>
      </MenuItem>
    </IconMenu>;

  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={component.handleDialogClose}
    />,
    <FlatButton
      label="Delete"
      primary={true}
      keyboardFocused={true}
      onTouchTap={event => {
        component.deleteCustomer();
      }}
    />
  ];

  const dialogBox = (
    <Dialog
      title="Delete"
      actions={actions}
      modal={false}
      open={component.state.isModelOpen}
      onRequestClose={component.handleClose}
    >
      Are you sure you want to delete customer?
    </Dialog>
  );

  return (
    <MuiThemeProvider>
      <List>
        <Subheader>Customers List</Subheader>
        {customers.map(customer =>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar>
                {component.getFirstLetter(customer.first_name)}
              </Avatar>
            }
            rightIconButton={rightIconMenu(customer)}
            primaryText={customer.first_name + ' ' + customer.last_name}
            secondaryText={
              <p>
                <span style={{ color: 'darkBlack' }}>
                  {customer.email}
                </span>
              </p>
            }
            key={customer.id}
          />
        )}
        {dialogBox}
      </List>
    </MuiThemeProvider>
  );
};
