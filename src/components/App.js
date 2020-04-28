import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
    constructor() {
        super();

        this.state = { images: [] };
        //this.onSearchSubmit = this.onSearchSubmit.bind(this); //syntax to use with async onsearchSubmit(term)
    }

    //to use with this.onSearchSubmit = this.onSearchSubmit.bind(this) use below method

    /*  async onSearchSubmit(term){
         //older way of waiting for response
        // axios.get('https://api.unsplash.com/search/photos', { params: { query: term } , headers: { Authorization: 'Client-ID An6Ru7oKQ8IdrZrT7RWwAyxILL9191QeGkgBoRqRdas'}}).then((response)=>{console.log(response.data.results)});
       const response =   await axios.get('https://api.unsplash.com/search/photos', { params: { query: term }, headers: { Authorization: 'Client-ID An6Ru7oKQ8IdrZrT7RWwAyxILL9191QeGkgBoRqRdas' } });
          //console.log(this);
      
          this.setState({images: response.data.results} )
  
        
      
      }*/

    //arrow function automatically take care of the this keyword;

    onSearchSubmit = async (term) => {
        //older way of waiting for response
        // axios.get('https://api.unsplash.com/search/photos', { params: { query: term } , headers: { Authorization: 'Client-ID An6Ru7oKQ8IdrZrT7RWwAyxILL9191QeGkgBoRqRdas'}}).then((response)=>{console.log(response.data.results)});
        const response = await unsplash.get("search/photos", {
            params: { query: term },
        });
        //console.log(this);

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmitterm={this.onSearchSubmit} whoami="i am a props" />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
