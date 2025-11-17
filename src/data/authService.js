// list of user information
const USERS = [
    { email: "admin@example.com", username: "admin", password: "testing123", isAdmin: true },
    { email: "user@example.com", username: "user", password: "testing123", isAdmin: false }
];

const delay = 300;

// use the email and password from USERS
export const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find(u => u.email === email && u.password === password);
            if (user) {
                // return user object without password information
                const { password, ...userWithoutPassword } = user;
                resolve(userWithoutPassword);
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, delay);
    });
};