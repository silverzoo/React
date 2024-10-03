import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="파이썬" numOfPage={300} />
            <Book name="파이썬2" numOfPage={400} />
            <Book name="파이썬3" numOfPage={130} />
        </div>
    );
}

export default Library;