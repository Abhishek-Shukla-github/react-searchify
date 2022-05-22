import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UniversalNavigation = ({ routesObj, style, isVoiceSupportEnabled }) => {
    // console.log(routesObj)
    const [searchedValue, setSearchedValue] = useState("");
    const [suggestionsArray, setSuggestionsArray] = useState([]);
    const [results, setResults] = useState([]);
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
        searchSuggestions(e.target.value);
    }

    useEffect(() => {
        if (suggestionsArray.length >= 1) {
            filterResults(suggestionsArray)
        }
    }, [suggestionsArray])

    useEffect(() => {
        setSearchedValue("")
        setResults([])
    }, [window.location.pathname])

    useEffect(() => {
        if (searchedValue.length === 0) setResults([])
    }, [searchedValue])


    const searchSuggestions = (keyword) => {
        let localSuggestionsArray = [];
        for (const [key, value] of Object.entries(routesObj)) {
            localSuggestionsArray.push(key)
        }
        // console.log(localSuggestionsArray)
        setSuggestionsArray(localSuggestionsArray)
    }

    const filterResults = (suggestionsArray) => {
        let localresults = [];
        let filteredArray = suggestionsArray.filter(entry => entry.includes(searchedValue))
        // console.log(filteredArray)
        // console.log(routesObj['about']);
        filteredArray.forEach(result => {
            localresults.push(routesObj[result])
        })
        setResults(localresults)
    }

    console.log(results)
    return (
        <div>
            <input value={searchedValue} onChange={handleSearch} />
            {results.map(result =>
                <div>
                    <Link to={result.route} onClick={() => setSearchedValue("")}>
                        <h1>{result.title}</h1>
                        <p>{result.info}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default UniversalNavigation
