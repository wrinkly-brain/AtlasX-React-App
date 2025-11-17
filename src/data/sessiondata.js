// Initial session data
let sessions = [
    {
        id: 1,
        title: "Modern React Patterns",
        room: "Main Hall",
        time: "09:00",
        category: "Software Development",
        description: "Explore the latest patterns and best practices in React development, including hooks, context, and component composition."
    },
    {
        id: 2,
        title: "Zero Trust Security",
        room: "Conf A",
        time: "10:30",
        category: "Cyber Security",
        description: "Understanding the principles and implementation of zero trust architecture in modern applications."
    },
    {
        id: 3,
        title: "Machine Learning Pipeline Design",
        room: "Conf B",
        time: "13:00",
        category: "Data Science",
        description: "Best practices for designing and implementing production-ready ML pipelines."
    }
];

let nextId = 4;
let delay = 500;

// Gets a list of all sessions
export const getSessionList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...sessions]);
        }, delay);
    });
};

// Adds a session to the collection
export const addSession = (sessionData) => {
    return new Promise((resolve) => {
        const newSession = {
            ...sessionData,
            id: nextId++
        };
        sessions = [...sessions, newSession];
        setTimeout(() => {
            resolve(newSession);
        }, delay);
    });
};

// Removes a session by id
export const deleteSession = (id) => {
    return new Promise((resolve) => {
        sessions = sessions.filter(session => session.id !== id);
        setTimeout(() => {
            resolve(true);
        }, delay);
    });
};

// The room list
export const ROOMS = ["Main Hall", "Conf A", "Conf B", "Conf C", "Conf D"];

// the category list
export const CATEGORIES = [
    "Software Development",
    "Cyber Security", 
    "Data Science",
    "Leadership",
    "Other"
];