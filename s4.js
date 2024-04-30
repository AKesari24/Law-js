const jsonData =
[
    {
        "crime": "Murder",
        "lawyers": ["Ram Jethmalani", "Harish Salve", "Kapil Sibal"]
    },
    {
        "crime": "Theft",
        "lawyers": ["Indira Jaising", "Fali S. Nariman", "Gopal Subramanium"]
    },
    {
        "crime": "Fraud",
        "lawyers": ["Mukul Rohatgi", "Abhishek Manu Singhvi", "Pinky Anand"]
    },
    {
        "crime": "Assault",
        "lawyers": ["Salman Khurshid", "Mahesh Jethmalani", "Ashwani Kumar"]
    },
    {
        "crime": "Cybercrime",
        "lawyers": ["Pavan Duggal", "N. S. Nappinai", "Prashant Mali"]
    },
    {
        "crime": "Drug Trafficking",
        "lawyers": ["Rebecca John", "Siddharth Luthra", "Nitya Ramakrishnan"]
    },
    {
        "crime": "Domestic Violence",
        "lawyers": ["Geeta Luthra", "Pinky Anand", "Gopal Subramanium"]
    },
    {
        "crime": "Corruption",
        "lawyers": ["Ram Jethmalani", "Harish Salve", "Kapil Sibal"]
    },
    {
        "crime": "Forgery",
        "lawyers": ["Mukul Rohatgi", "Abhishek Manu Singhvi", "Pinky Anand"]
    },
    {
        "crime": "Arson",
        "lawyers": ["Rebecca John", "Siddharth Luthra", "Nitya Ramakrishnan"]
    },
    {
        "crime": "Kidnapping",
        "lawyers": ["Indira Jaising", "Fali S. Nariman", "Gopal Subramanium"]
    },
    {
        "crime": "Bribery",
        "lawyers": ["Ram Jethmalani", "Harish Salve", "Kapil Sibal"]
    },
    {
        "crime": "Money Laundering",
        "lawyers": ["Pavan Duggal", "N. S. Nappinai", "Prashant Mali"]
    },
    {
        "crime": "Rape",
        "lawyers": ["Geeta Luthra", "Pinky Anand", "Gopal Subramanium"]
    },
    {
        "crime": "Embezzlement",
        "lawyers": ["Rebecca John", "Siddharth Luthra", "Nitya Ramakrishnan"]
    },
    {
        "crime": "Terrorism",
        "lawyers": ["Indira Jaising", "Fali S. Nariman", "Gopal Subramanium"]
    },
    {
        "crime": "Blackmail",
        "lawyers": ["Ram Jethmalani", "Harish Salve", "Kapil Sibal"]
    },
    {
        "crime": "Extortion",
        "lawyers": ["Mukul Rohatgi", "Abhishek Manu Singhvi", "Pinky Anand"]
    },
    {
        "crime": "Human Trafficking",
        "lawyers": ["Pavan Duggal", "N. S. Nappinai", "Prashant Mali"]
    },
    {
        "crime": "Money Counterfeiting",
        "lawyers": ["Geeta Luthra", "Pinky Anand", "Gopal Subramanium"]
    }
]



function searchAndUpdate(query) {
    const results = [];
    for (const entry of jsonData) {
        // Match query against 'State' field
        if (entry.crime.toLowerCase() === query.toLowerCase()) {
            results.push(entry);
        }
    }
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results
    results.forEach(result => {
        const resultHTML = `
            <div>
                <h3>${result.lawyers}</h3>
            </div>
        `;
        searchResultsContainer.innerHTML += resultHTML;
    });
}

// Add event listener to input for search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    if (searchTerm !== '') {
        searchAndUpdate(searchTerm);
    } else {
        const searchResultsContainer = document.getElementById('searchResults');
        searchResultsContainer.innerHTML = ''; // Clear search results if search input is empty
    }
});
