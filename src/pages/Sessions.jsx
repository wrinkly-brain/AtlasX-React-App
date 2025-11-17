import Session from "../components/Session";
import { useEffect, useState } from "react"
import { getSessionList } from "../data/sessiondata"

export default function Sessions() {
    const [sessions, setSessions] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const fetchedSessions = await getSessionList();
                setSessions(fetchedSessions);
            }
            catch (er) {
                console.error(er);
            }
            finally {
                setLoading(false);
            }
        }

        fetchSessions();
    }, [sessions]);

    return (
        <div>
            {isLoading ?
                <p>Loading...</p>
                :
                <>
                    <ul className="list-unstyled">
                        {sessions.map(sesh => (
                            <li
                                key={sesh.id}
                                className="list-item">
                                <Session
                                    id={sesh.id}
                                    title={sesh.title}
                                    time={sesh.time}
                                    room={sesh.room}
                                    category={sesh.category}
                                    description={sesh.description}
                                />
                            </li>
                        ))
                        }
                    </ul>
                </>
            }
        </div>
    )
}