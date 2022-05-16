import React, { useState, useEffect } from 'react';

const UniversalNavigation = ({ routesObj, style, isVoiceSupportEnabled }) => {

    useEffect(() => {
        if (suggestionsArray.length >= 1) {
            filterResults(suggestionsArray)
        }
    }, [suggestionsArray])

    const [searchedValue, setSearchedValue] = useState("");
    const [suggestionsArray, setSuggestionsArray] = useState([]);
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
        searchSuggestions(e.target.value)
    }

    const searchSuggestions = (keyword) => {
        let localSuggestionsArray = [];
        for (const [key, value] of Object.entries(routesObj)) {
            localSuggestionsArray.push(key)
        }
        setSuggestionsArray(suggestionsArray)
    }

    const filterResults = (suggestionsArray) => {

    }

    const

    return (
        <div>
            <input value={searchedValue} onChange={(e) => handleSearch(e)} />
            <h1>{searchedValue}</h1>
        </div>
    )
}

export default UniversalNavigation
