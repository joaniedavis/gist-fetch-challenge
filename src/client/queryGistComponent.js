// This will wrap the logic for the form that will communicate with the server API and display the provided results.
import React from "react";

export default class QueryGistComponent extends React.Component {
    constructor(props) {
        super(props);

        // Set up state to allow for retrieving information from form
    }

    handleSubmitButtonClicked(event) {
        event.preventDefault(); // Stops the page from reloading upon submission.
        this.fetchSearchResults();
    }

    fetchSearchResults() {
        // Query search API once implemented. For now, just log that we got here.
        console.log('Querying!');
    }

    render() {
        return(
            <div>
                <form>
                    <h1>Search for Gists</h1>
                    <input type='text' placeholder='Enter a username to search' />
                    <button onClick={ this.handleSubmitButtonClicked.bind(this) }>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
