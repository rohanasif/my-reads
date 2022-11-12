export function Book({ img, title, author, shelf }) {
    const handleChange = (e) => {
        if (e.target.value === "currentlyReading") {
            shelf = "currentlyReading"
        }
        else if (e.target.value === "wantToRead") {
            shelf = "wantToRead"
        }
        else if (e.target.value === "read") {
            shelf = "read"
        }
        else {
            shelf = "none"
        }
    }
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `${img}`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select defaultValue={'none'} onChange={handleChange}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author}</div>
        </div>
    )
}