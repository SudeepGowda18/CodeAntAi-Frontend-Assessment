import AuthLeft from "../components/Authenti/AuthLeft.jsx"
import AuthRight from "../components/Authenti/AuthRight.jsx";
const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;