const jsonData =
[
    {
        "State": "Andhra Pradesh",
        "High_Court": "High Court of Andhra Pradesh, Amaravati",
        "District_Courts": "District Courts"
    },
    {
        "State": "Arunachal Pradesh",
        "High_Court": "Gauhati High Court, Itanagar Bench",
        "District_Courts": "District Courts"
    },
    {
        "State": "Assam",
        "High_Court": "Gauhati High Court, Guwahati",
        "District_Courts": "District Courts"
    },
    {
        "State": "Bihar",
        "High_Court": "Patna High Court, Patna",
        "District_Courts": "District Courts"
    },
    {
        "State": "Chhattisgarh",
        "High_Court": "Chhattisgarh High Court, Bilaspur",
        "District_Courts": "District Courts"
    },
    {
        "State": "Goa",
        "High_Court": "Bombay High Court, Panaji Bench",
        "District_Courts": "District Courts"
    },
    {
        "State": "Gujarat",
        "High_Court": "Gujarat High Court, Ahmedabad",
        "District_Courts": "District Courts"
    },
    {
        "State": "Haryana",
        "High_Court": "Punjab and Haryana High Court, Chandigarh",
        "District_Courts": "District Courts"
    },
    {
        "State": "Himachal Pradesh",
        "High_Court": "Himachal Pradesh High Court, Shimla",
        "District_Courts": "District Courts"
    },
    {
        "State": "Jammu and Kashmir",
        "High_Court": "Jammu and Kashmir High Court, Srinagar and Jammu",
        "District_Courts": "District Courts"
    },
    {
        "State": "Jharkhand",
        "High_Court": "Jharkhand High Court, Ranchi",
        "District_Courts": "District Courts"
    },
    {
        "State": "Karnataka",
        "High_Court": "Karnataka High Court, Bengaluru",
        "District_Courts": "District Courts"
    },
    {
        "State": "Kerala",
        "High_Court": "Kerala High Court, Kochi",
        "District_Courts": "District Courts"
    },
    {
        "State": "Madhya Pradesh",
        "High_Court": "Madhya Pradesh High Court, Jabalpur",
        "District_Courts": "District Courts"
    },
    {
        "State": "Maharashtra",
        "High_Court": "Bombay High Court, Mumbai",
        "District_Courts": "District Courts"
    },
    {
        "State": "Manipur",
        "High_Court": "Manipur High Court, Imphal",
        "District_Courts": "District Courts"
    },
    {
        "State": "Meghalaya",
        "High_Court": "Meghalaya High Court, Shillong",
        "District_Courts": "District Courts"
    },
    {
        "State": "Mizoram",
        "High_Court": "Gauhati High Court, Aizawl Bench",
        "District_Courts": "District Courts"
    },
    {
        "State": "Nagaland",
        "High_Court": "Gauhati High Court, Kohima Bench",
        "District_Courts": "District Courts"
    },
    {
        "State": "Odisha",
        "High_Court": "Orissa High Court, Cuttack",
        "District_Courts": "District Courts"
    },
    {
        "State": "Punjab",
        "High_Court": "Punjab and Haryana High Court, Chandigarh",
        "District_Courts": "District Courts"
    },
    {
        "State": "Rajasthan",
        "High_Court": "Rajasthan High Court, Jodhpur",
        "District_Courts": "District Courts"
    },
    {
        "State": "Sikkim",
        "High_Court": "Sikkim High Court, Gangtok",
        "District_Courts": "District Courts"
    },
    {
        "State": "Tamil Nadu",
        "High_Court": "Madras High Court, Chennai",
        "District_Courts": "District Courts"
    },
    {
        "State": "Telangana",
        "High_Court": "High Court for the State of Telangana, Hyderabad",
        "District_Courts": "District Courts"
    },
    {
        "State": "Tripura",
        "High_Court": "Tripura High Court, Agartala",
        "District_Courts": "District Courts"
    },
    {
        "State": "Uttar Pradesh",
        "High_Court": "Allahabad High Court, Prayagraj",
        "District_Courts": "District Courts"
    },
    {
        "State": "Uttarakhand",
        "High_Court": "Uttarakhand High Court, Nainital",
        "District_Courts": "District Courts"
    },
    {
        "State": "West Bengal",
        "High_Court": "Calcutta High Court, Kolkata",
        "District_Courts": "District Courts"
    },
    {
        "State": "Andaman and Nicobar Islands",
        "High_Court": "Calcutta High Court, Port Blair Bench",
        "District_Courts": "District Courts"
    },
    {
        "State": "Chandigarh",
        "High_Court": "Punjab and Haryana High Court, Chandigarh",
        "District_Courts": "District Courts"
    },
    {
        "State": "Dadra and Nagar Haveli and Daman and Diu",
        "High_Court": "Bombay High Court, Mumbai",
        "District_Courts": "District Courts"
    },
    {
        "State": "Lakshadweep",
        "High_Court": "Kerala High Court, Kochi",
        "District_Courts": "District Courts"
    },
    {
        "State": "Delhi",
        "High_Court": "Delhi High Court, New Delhi",
        "District_Courts": "District Courts"
    }
]


function searchAndUpdate(query) {
    const results = [];
    for (const entry of jsonData) {
        // Match query against 'State' field
        if (entry.State.toLowerCase() === query.toLowerCase()) {
            results.push(entry);
        }
    }
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results
    results.forEach(result => {
        const resultHTML = `
            <div>
                <h3>${result.High_Court}</h3>
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
