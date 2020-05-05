
import React, {Component} from "react";

//import components
import Photo from "./Photo";
import NotFound from "./NotFound";
import LoadingImg from "./LoadingImg";


//Photo Container Class handling gallery

export default class PhotoContainer extends Component {
    //LifeCycle component to perform the Search 
    componentDidMount() {
        this.props.doSearch(this.props.matchData.params.query);
    }
    //Update the Page every times it Loads.
    componentDidUpdate(prevProps) {
   
        if(this.props.matchData.params.query !== prevProps.matchData.params.query){
            this.props.doSearch(this.props.matchData.params.query);
        }
    }
    


  
    render() {

        const mainImages = this.props.data;
        let images;

        if(this.props.page){
            images = <LoadingImg />
        }

     

        // when there are results append theme to a PhotoContainer.
       if(mainImages.length > 0){
       images = mainImages.map( img => <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id} />)
        }

        if(!this.props.page && mainImages.length === 0 ){
            images = <NotFound />
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


