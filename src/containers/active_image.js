import React , { Component } from 'react';
import { connect } from 'react-redux';

class ActiveImage extends Component {
    render(){
        if(this.props.activeImage == null){
            return <div>No Image selected.</div>;
        }
        const img_url = `https://unsplash.it/900/900?image=${this.props.activeImage.id}`;
        console.log(this.props.activeImage)
        return (
            <div className="col-xs-9">
                <div><h3>Author: {this.props.activeImage.author}</h3>
                <span className="input-group-btn">
                    <a href={`${this.props.activeImage.post_url}/download?force=true`} className="btn btn-success">Download</a>
                </span>
                </div>
                <img src={img_url} className="img-thumbnail" alt={this.props.activeImage.filename} width="900" height="900" />
            </div>
        )

    }
}

function mapStateToProps(state) {
    return { activeImage: state.active_image}
}

export default connect(mapStateToProps)(ActiveImage);