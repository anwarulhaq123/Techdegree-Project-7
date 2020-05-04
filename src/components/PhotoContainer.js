

import React, {Component} from "react";

//import components
import Photo from "./Photo";
import NotFound from "./NotFound";


//Photo Container Class handling gallery

export default class PhotoContainer extends Component {
    //LifeCycle component to perform the Search 
    componentDidMount() {
        this.props.doSearch(this.props.matchData.params.query);
    }
    //Update the Page every times it Loads.
    componentDidUpdate(prevProps) {
        //console.log(prevProps);
        if(this.props.matchData.params.query !== prevProps.matchData.params.query){
            this.props.doSearch(this.props.matchData.params.query);
        }
    }

  
    render() {

        const mainImages = this.props.data;
        let images;

        // when there are results append theme to a PhotoContainer.
       if(mainImages.length > 0){
       images = mainImages.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
        }else {
          //if there are no results, show Not found component.
        images = <NotFound />;
          }

       


        return(
            <div className="photo-container">
                <h2>Results for {this.props.matchData.params.query}</h2>
                <ul> 
                    {images}

                </ul>
            </div>

        );
    }
}


