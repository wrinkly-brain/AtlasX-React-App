import { useNavigate } from "react-router-dom";
import { loginUser } from "../data/authService";
import { useContext, useState } from "react";
import { ProfileContext } from "../ProfileContext";

export default function Login() {
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();
    const { setProfile } = useContext(ProfileContext);

    const handleLogin = async (event) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.currentTarget);
        const dataObject = Object.fromEntries(formData.entries());

        try {
            const user = await loginUser(dataObject.username, dataObject.password);
            setProfile(user);
            
            // Redirect to sesssions page
            navigate("/");
        }
        catch (er) {
            setErrorMsg(`An error has occurred: ${er.message}`);
        }
    }

    const removeError = () => {
        if (errorMsg) {
            setErrorMsg(null);
        }
    }

    return (
        <>
            <h2>Login</h2>
            {errorMsg !== null &&
                <div className="alert alert-danger">{errorMsg}</div>
            }
            <form onSubmit={handleLogin} onChange={removeError}>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" name="username" className="form-control" required />

                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" id="password" name="password" className="form-control" required />

                <button type="submit" className="btn btn-success my-3">Submit</button>
            </form>
        </>
    )
}