import { useContext } from "react"
import { ProfileContext } from "../ProfileContext"
import { deleteSession } from "../data/sessiondata";

export default function Session({ id, title, time, room, category, description }) {
    const { profile } = useContext(ProfileContext);

    const handleDelete = () => {
        deleteSession(id);
    }

    return (
        <div className="border border-2 rounded p-4 my-3">
            <span className="d-flex flex-row align-items-center">
                <button type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} className="btn btn-link text-dark align-items-center">
                    <h3 className="me-auto">{title}</h3>
                </button>
                <span className="d-flex ms-auto flex-column flex-lg-row align-items-lg-center">
                    <span className="bg-primary rounded text-light p-2 mx-1 my-1 text-center">{time}</span>
                    <span className="bg-secondary rounded text-light p-2 mx-1 my-1 text-center">{room}</span>
                    {(profile && profile.isAdmin) &&
                        <button className="btn btn-danger mx-1" onClick={handleDelete}>Delete</button>
                    }
                </span>
            </span>
            <div id={`collapse${id}`} className="collapse border-top">
                <p><strong>Category:</strong> {category}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}