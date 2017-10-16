import React from 'react'


import { Table, Icon, Button, Radio, Input} from 'antd';


const { Column, ColumnGroup } = Table;
const Search = Input.Search;
import '../../static/css/table.css'





class TopTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            columns:this.props.columns,
            data:this.props.data,
            sortBack: this.props.sortBack,
            size: 'large'
        }
        
        this.data = this.props.data
    }
    componentDidMount(){
        this.sortTop('error',false);
    }
    sortTop(option, directionSort) {
        let sortArr = [];
        if (directionSort) {
            sortArr = this.state.data.sort(function (x, y) {
                var value1 = parseInt(x[option]);
                var value2 = parseInt(y[option]);
                return value1 - value2;
            })
            console.log(sortArr);
        } else {
            sortArr = this.state.data.sort(function (x, y) {
                var value1 = parseInt(x[option]);
                var value2 = parseInt(y[option]);
                return value2 - value1;
            })
        }
        console.log(sortArr)
        this.setState({
            data: sortArr
        })
    }
    searchKeyWord(word) {
        let keyWord = word.toUpperCase();
        let filterName = this.data.filter((item) => {
            return item['user'].toUpperCase().indexOf(keyWord) !== -1
        });
        console.log(filterName);
        this.setState({
            data: filterName
        })
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }
    render() {
        return (
            <div>
                <div className='topHeader'>
                    <div style={{ display: 'flex',alignItems:'center' }}>
                        <img className='topImg' src='../../../static/images/public/upImg.png'></img>
                        <span className='topRace'>用户排名</span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Radio.Group value={ this.state.size} onChange={this.handleSizeChange}>
                            <Radio.Button onClick={(a,b) =>this.sortTop('error',false)}  value="large">用电波动较大</Radio.Button>
                            <Radio.Button onClick={(a,b) =>this.sortTop('error',true)} value="default">优质用户</Radio.Button>
                            <Radio.Button onClick={(a,b) =>this.sortTop('electric',false)} value="small">用电量</Radio.Button>
                        </Radio.Group>

                        <Search
                        className='searchInput'
                        placeholder="input search text"
                        style={{ width: 160,marginLeft:'15px'  }}
                        onSearch={value =>this.searchKeyWord(value)}
                         />
                    </div>
                </div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>

        )
    }
}

module.exports = TopTable