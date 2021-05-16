// This will wrap the logic for the form that will communicate with the server API and display the provided results.
import React from "react";
import $ from 'jquery';


export default class QueryGistComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            responseData: [],
        }
    }

    handleSubmitButtonClicked(event) {
        event.preventDefault(); // Stops the page from reloading upon submission.
        this.fetchSearchResults();
    }

    handleQueryInputChanged(event) {
        this.setState({
            searchQuery: event.target.value,
        });
    }

    fetchSearchResults() {
        let context = this;
        let query = this.state.searchQuery;
        $.ajax({
            url: `http://127.0.0.1:3001/gists/?username=${query}`,
            method: 'GET',
            success: function(response) {
                context.setState({
                    responseData: response.data,
                });
            }
        });
    }

    render() {
        return(
            <div>
                <form>
                    <h1>Search for Gists</h1>
                    <input type='text' placeholder='Enter a username to search'
                           onChange={ this.handleQueryInputChanged.bind(this) } />
                    <button onClick={ this.handleSubmitButtonClicked.bind(this) }>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
