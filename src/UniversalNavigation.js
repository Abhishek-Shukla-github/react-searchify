import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UniversalNavigation = ({ routesObj, style, isVoiceSupportEnabled }) => {
    const [searchedValue, setSearchedValue] = useState("");
    const [suggestionsArray, setSuggestionsArray] = useState([]);
    const [results, setResults] = useState([]);
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
        fetchAllPossibleSuggestions(e.target.value);
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


    const fetchAllPossibleSuggestions = (keyword) => {
        let localSuggestionsArray = [];
        for (const [key, value] of Object.entries(routesObj)) {
            localSuggestionsArray.push(key)
        }
        setSuggestionsArray(localSuggestionsArray)
    }

    const filterResults = (suggestionsArray) => {
        let localresults = [];
        suggestionsArray?.forEach(entry => {
            entry.split("_").forEach(word => {
                word.includes(searchedValue) && localresults.push(routesObj[entry])
            })
        })
        setResults(localresults)
    }

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
