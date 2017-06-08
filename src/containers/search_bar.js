import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchMatches} from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    componentDidMount(){
        console.log('component mount');
        this.props.fetchMatches(this.state.term);
    }

onInputChange(event){
        this.setState({term: event.target.value});
        // console.log(event.target.value);
}
onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);
    this.props.fetchMatches(this.state.term);
    this.setState({ term: '' });

}

    render(){

        return(
            <form
                className="form-search input-group"
                  onSubmit={this.onFormSubmit}  >
                <input
                    value={this.state.term}
                    onChange={this.onInputChange }
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                    Submit
                    </button>
                </span>
            </form>
        );

    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchMatches}, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);
