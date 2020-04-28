import React from 'react';



class SearchBar extends React.Component {


    state = {term: ""}
    
    //onFormSubmit.bind(this)

    //arrow function automatically bind the this in correct fashion.

    //another method to correctly bind to functions inside class is is to create a constructor

    // constructor () {

    //this.onSubmit = this.onSubmit.bind(this);
  //  }

    onFormSubmit = (event) => {

        event.preventDefault();

        this.props.onSubmitterm(this.state.term) //class based props needs this in front 

    }


    //onInputChange = (event) => {

    //    console.log(event.target.value)
   // }

    render() {

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="Search">Image Search</label>
                        <input type="text" id="Search" value={this.state.term} onChange={(event)=> this.setState({term: event.target.value})}></input>
                    </div>
                    
                </form>
            </div>
        );
    }
}


export default SearchBar;