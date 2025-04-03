import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";


export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { cid } = useParams();

    // If signed in, proceed
    if (currentUser) {
        // Check if the user is trying to get to a website that they don't have access to
        if (cid !== undefined) {
            // If the user is not enrolled in there, navigate away
            if (!enrollments.some((e: any) => (e.course === cid && e.user === currentUser._id))) {
                return <Navigate to="/Kambaz/Dashboard" />;
            }
        }

        return children;
    } else {
        // Go to sign in page
        return <Navigate to="/Kambaz/Account/Signin" />;
    }
}
