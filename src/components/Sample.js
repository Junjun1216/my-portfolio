import React, {Component} from 'react';
import "../css/Sample.css";
import {Container} from "react-bootstrap";

export class Sample extends Component {

    render() {
        return (
            <Container  className="sample">
                    <h1>Songfindrr Description</h1>
                    Project Songfindrr is a lyrics search engine that uses a combination of elastic database query,
                    webscraping, and google custom search. Unlike most lyric search engines that includes a preloaded
                    database which is boring and tedious to create, we instead to choose to use webscrapes on search
                    and cashing the results in our database. Thus, our database will populate with continuous usage.
                    Another key feature of the app is that it uses the various method mentioned above to fetch data, and
                    interpret the result by formatting them according to a regex(since different sites and sources may vary slightly in spelling)
                    and a rating is the given to each entry based on the fetch data, these results from different sources will then merge together
                    to create an sorted list with the song title and the rating. The song tile and author is then first returned to
                    the user for speed and a separate set of live scrapes will then commence to find the lyrics of the songs.
                    If the lyrics is already in our database then such the scrape will not commence for that entry. This last step
                    will take a substantial amount of time to complete. However in theory, after continuous usage, the
                    app will not have to rely on webscrape as much and instead fetch the songs from the database instantly.
                    Although we did understand the impracticality of some of these features, especially live scraping and copyright,
                    the main focus of our project was to build the most "usable" product that can generate results some
                    what comparable to many of the big song lyrics engines. And it did perform as intended, so in our eyes, the project was a success.
                    So in summary, songfindrr app is a lyrics search engine that uses cashing and live webscraping to
                    create a self maintaining ecosystem. To view the source code, please check out my github link at the bottom of the page.
                    Credits to my partners: Kasra Rahmani for coding the database, hosting, and Daniel Chan for creating the frontend!
            </Container>
        )
    }
}

export default Sample;