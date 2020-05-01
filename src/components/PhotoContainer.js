

import React, {Component} from "react";

//import components
import Photo from "./Photo";
import NotFound from "./NotFound";


//Photo Container Class handling gallery

export default class PhotoContainer extends Component {
    //LifeCycle component to perform the Search 
    componentDidMount() {
        this.props.doSearch(this.props.routeMatch);
    }
    //Update the Page every times it Loads
    componentDidUpdate(prevProps) {
        //console.log(prevProps);
        if(this.props.routeMatch.params.query !== prevProps.routeMatch.params.query){
            this.props.doSearch(this.props.routeMatch.params.query);
        }
    }

  
    render() {

        const mainImages = this.props.data;
        let images;


        // when there are results append theme to a PhotoContainer
        if(mainImages.length > 0){
            images = mainImages.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
        }

        //if there are no results show Not found component
        if(!this.props.page && mainImages.length === 0){
        images = <NotFound />
        }


        return(
            <div className="photo-container">
                <h2>Results for {this.props.routeMatch.params.query}</h2>
                <ul> 
                    {images}
                </ul>
            </div>

        );
    }
}

