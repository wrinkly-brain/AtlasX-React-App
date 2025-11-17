import { useNavigate } from "react-router-dom";
import { addSession, CATEGORIES, ROOMS } from "../data/sessiondata"
import { useState } from "react";

export default function AddSession() {
    const [errorMsg, setErrorMsg] = useState(null);
    const rooms = ROOMS;
    const categories = CATEGORIES;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        let isValid = true;
        const errorMsgs = [];

        // Get form data
        const formData = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData.entries());

        // Validate title and description fields
        for (const [key, value] of formData.entries()) {
            if (key === "title") {
                const isTitleValid = /[A-Za-z]{3,}/.test(value);
                if (!isTitleValid) {
                    errorMsgs.push("Title must contain 3 or more consecutive alphabetical characters. ");
                    isValid = false;
                }
            }
            else if (key === "description") {
                const isDescValid = /[A-Za-z]{3,}/.test(value);
                if (!isDescValid) {
                    errorMsgs.push("Description must contain 3 or more consecutive alphabetical characters. ");
                    isValid = false;
                }
            }
        }

        if (!isValid) {
            setErrorMsg(errorMsgs)
        }
        else {
            addSession(dataObject);

            // Redircet to sessions page
            navigate('/');
        }
    }

    const removeErrorMsg = () => {
        setErrorMsg(null);
    }

    return (
        <>
            <h2>Add a Session</h2>
            {errorMsg !== null &&
                <div className="alert alert-danger">{errorMsg}</div>
            }
            <form onSubmit={handleSubmit} onChange={removeErrorMsg}>
                <label htmlFor="seshTitle" className="form-label">Session Title</label>
                <input type="text" id="seshTitle" name="title" className="form-control" required />

                <label htmlFor="seshRoom" defaultValue="" className="form-label">Room</label>
                <select className="form-select" name="room" id="seshRoom" required>
                    <option value="">Select a room</option>
                    {rooms.map((room, i) => (
                        <option value={room} key={i}>{room}</option>
                    ))};
                </select>

                <label htmlFor="seshTime" className="form-label">Time</label>
                <input type="time" id="seshTime" name="time" className="form-control" required />

                <label htmlFor="seshCategory" className="form-label">Category</label>
                <select id="seshCategory" name="category" className="form-select" defaultValue="" required>
                    <option value="">Select a category</option>
                    {categories.map((c, i) => (
                        <option value={c} key={i}>{c}</option>
                    ))}
                </select>

                <label htmlFor="seshDesc" className="form-label">Description</label>
                <input type="text" id="seshDesc" name="description" className="form-control" required />

                <button type="submit" className="btn btn-success my-3">Submit</button>
            </form>
        </>
    )
}