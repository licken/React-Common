require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');
require('react-data-components/css/table-twbs.css');

import React from 'react';
import {DataTable} from 'react-data-components';

class PagingDemo extends React.Component {

  render() {
    // Generate random data
    let names = ['Carlos', 'Juan', 'Jesus', 'Alberto', 'John'];
    let cities = ['Chicago', 'Tampico', 'San Francisco', 'Mexico City', 'Boston', 'New York'];
    let addresses = ['333 West Wacker Drive', '1931 Insurgentes Sur', '1 Lombard Street', '55 Av Hidalgo'];

    let data = [];
    for (let i = 0; i < 1000; i++) {
      data.push({
        id: i,
        name: names[~~(Math.random() * names.length)],
        city: cities[~~(Math.random() * cities.length)],
        address: addresses[~~(Math.random() * addresses.length)]
      });
    }

    let columns = [
      {title: 'Name', prop: 'name'},
      {title: 'City', prop: 'city'},
      {title: 'Address', prop: 'address'}
    ];

    return (
      <DataTable
        className="container"
        keys="id"
        columns={columns}
        initialData={data}
        initialPageLength={10}
        initialSortBy={{ prop: 'city', order: 'descending' }}
        pageLengthOptions={[ 5,10,20,50 ]}
      />
    );
  }

}

export default PagingDemo;
