import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "./styles.css"

const Searchify = ({ routesObj, styleObj, isVoiceSupportEnabled, crossBtn, micBtn, stopBtn }) => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
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
        padding: "5px 0px 5px 0px",
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

    const handleClose = () => {
        setSearchedValue("")
    }
    useEffect(() => {
        if (transcript.length) {
            setSearchedValue(transcript)
            fetchAllPossibleSuggestions(transcript)
        }
    }, [listening, transcript])

    document.addEventListener("keydown", (e) => {
        {
            if (e.key === "Escape") {
                handleClose()
            }
        }
    })

    return (
        <div className="parent-wrapper" style={{ width: styleObj.searchbar.width, position: 'absolute', left: styleObj.searchbar.left, top: styleObj.searchbar.top }}>
            <div className="input-wrapper">
                <input value={searchedValue} onChange={handleSearch} className="searchbar" style={styleObj.searchbar} />
                {searchedValue.length > 0 && <button className="cross-btn" onClick={handleClose}>{crossBtn}</button>}
                {isVoiceSupportEnabled && browserSupportsSpeechRecognition &&
                    !listening ? <button className="mic-btn" onClick={() => SpeechRecognition.startListening()}>{<img src={micBtn} />}</button>
                    : <button className="stop-btn" onClick={() => SpeechRecognition.stopListening()}>{<img src={stopBtn} />}</button>
                }
            </div>
            <div className="results-wrapper">
                {results.map(result =>
                    <div className="suggestions" style={stylizeWrapper()}>
                        <a href={result.route} onClick={() => setSearchedValue("")}>
                            <div className="private-title-svg-div">
                                <p className="svg">{result.svg}</p>
                                <div>
                                    <p className="title">{result.title}</p>
                                    <p className="info">{result.info}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Searchify
