import React from 'react';
import './SearchBar.css'



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        // pokazuje state w spoczynku
        this.state={
            term: ''
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleTermChange(event){
        this.setState({term: event.target.value})   // akceptuje wvwnt i ustala searchbar value jako ten event
    }

    search() {
        this.props.onSearch(this.state.term)}  // przyjmuje wpis i loguje w onSearch

    render(){
        return(
            <div className="SearchBar"  >
              <input placeholder="enter a song, album or artist"
                    onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}
export default SearchBar;