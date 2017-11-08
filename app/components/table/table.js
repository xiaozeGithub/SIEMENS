// import React from 'react'


// import { Table, Icon, Button, Radio, Input} from 'antd';


// const { Column, ColumnGroup } = Table;
// const Search = Input.Search;
// import '../../static/css/table.css'





// class TopTable extends React.Component {
//     constructor(props, context) {
//         super(props, context)
//         this.state = {
//             columns:this.props.columns,
//             data:this.props.data,
//             sortBack: this.props.sortBack,
//             size: 'large',
//             pagination: {
//                 pageSize:20,
//                 current:10
//             }
//         }
        
//         this.data = this.props.data
//     }
//     componentDidMount(){
//         this.sortTop('error',false);
//     }
//     sortTop(option, directionSort) {
//         let sortArr = [];
//         if (directionSort) {
//             sortArr = this.state.data.sort(function (x, y) {
//                 var value1 = parseInt(x[option]);
//                 var value2 = parseInt(y[option]);
//                 return value1 - value2;
//             })
//             console.log(sortArr);
//         } else {
//             sortArr = this.state.data.sort(function (x, y) {
//                 var value1 = parseInt(x[option]);
//                 var value2 = parseInt(y[option]);
//                 return value2 - value1;
//             })
//         }
//         console.log(sortArr)
//         this.setState({
//             data: sortArr
//         })
//     }
//     searchKeyWord(word) {
//         let keyWord = word.toUpperCase();
//         let filterName = this.data.filter((item) => {
//             return item['user'].toUpperCase().indexOf(keyWord) !== -1
//         });
//         console.log(filterName);
//         this.setState({
//             data: filterName
//         })
//     }
//     handleSizeChange = (e) => {
//         this.setState({ size: e.target.value });
//     }
//     render() {
//         return (
//             <div>
//                 <div className='topHeader'>
//                     <div style={{ display: 'flex',alignItems:'center' }}>
//                         <img className='topImg' src='../../../static/images/public/upImg.png'></img>
//                         <span className='topRace'>用户排名</span>
//                     </div>
//                     <div style={{ display: 'flex' }}>
//                         <Radio.Group value={ this.state.size} onChange={this.handleSizeChange}>
//                             <Radio.Button onClick={(a,b) =>this.sortTop('error',false)}  value="large">用电波动较大</Radio.Button>
//                             <Radio.Button onClick={(a,b) =>this.sortTop('error',true)} value="default">优质用户</Radio.Button>
//                             <Radio.Button onClick={(a,b) =>this.sortTop('electric',false)} value="small">用电量</Radio.Button>
//                         </Radio.Group>

//                         <Search
//                         className='searchInput'
//                         placeholder="input search text"
//                         style={{ width: 160,marginLeft:'15px'  }}
//                         onSearch={value =>this.searchKeyWord(value)}
//                          />
//                     </div>
//                 </div>
//                 <Table columns={this.state.columns} dataSource={this.state.data} pagination={this.state.pagination} size='small'/>
//             </div>

//         )
//     }
// }

// module.exports = TopTable
import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Gender',
  dataIndex: 'gender',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}];

class TopTable extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.getTableData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
       
  }
  getTableData = (params = {}) => {
    this.setState({ loading: true });
    const _url = 'https://randomuser.me/api';
    fetch(_url, {
        method: 'POST',
        body: JSON.stringify({
            results: 10,
            ...params,
        })
    }).then(response => response.json()).then(data => {
        const pagination = { ...this.state.pagination };
        // Read total count from server
        // pagination.total = data.totalCount;
        pagination.total = 200;
        this.setState({
          loading: false,
          data: data.results,
          pagination,
        });
    });
  }
  componentDidMount() {
    this.getTableData();
  }
  render() {
    return (
      <Table columns={columns}
        rowKey={record => record.registered}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

module.exports = TopTable