import React , { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectImage} from '../actions/index';


class ListMatches extends Component {
    constructor(props){
        super(props);

        this.renderMatchesList = this.renderMatchesList.bind(this);
    }

    renderMatchesList(image){
         console.log('Render image ',image.id)
        const img_url = `https://unsplash.it/300/300?image=${image.id}`;
        return(
            <li key={image.id}
                onClick={() => {
                    this.props.selectImage(image);
                }}  >
                <img src={img_url} className="img-thumbnail" alt={image.filename} width="300" height="300" />
            </li>
        )
    }

    render(){
        console.log(this.props.images);
        return (
            <div className="col-xs-3">
            <ul>
                { this.props.images.map(this.renderMatchesList) }
            </ul>
            </div>
        );
    }

}

function mapStateToProps(state){
    return { images: state.images };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectImage }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMatches);