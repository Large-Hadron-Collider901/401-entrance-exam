import React from 'react';

import { Table, Button } from 'react-bootstrap';

import axios from 'axios';


class Items extends React.Component {

  handleDeleteItem  = async (id) => {
    try {
      const API_SERVER = process.env.REACT_APP_API;
      const res = await axios.delete(`${API_SERVER}/items/:id`, id)
      console.log(`Deleted item id:`, id);
 
      return res.data;
    } catch (errors) {
      console.error(errors);
    }
  };
  
  render() {

    return (
      <section>
        <h2>Items...</h2>

        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.itemsList.map((item, idx) =>
                <tr key={item.id} >
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    <Button data-testid={`delete-button-${item.name}`} onClick={e => this.handleDeleteItem(item.id)}>Delete Item</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>


      </section>
    );
  }
}

export default Items;
