import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const UniversalNavigation = ({ routesObj, styleObj, isVoiceSupportEnabled }) => {
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

    const stylizeWrapper = () => ({
        padding: styleObj.searchbar.padding,
        width: styleObj.searchbar.width,
        marginRight: "auto",
        marginLeft: "auto",
    })

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
        <div >
            <input value={searchedValue} onChange={handleSearch} className="searchbar" style={styleObj.searchbar} />
            {results.map(result =>
                <div className="results-wrapper" style={stylizeWrapper()}>
                    <Link to={result.route} onClick={() => setSearchedValue("")}>
                        <div className="private-title-svg-div">
                            <p className="title">{result.title}</p>
                            <p className="svg">{result.svg}</p>
                        </div>
                        <p className="info">{result.info}</p>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default UniversalNavigation
