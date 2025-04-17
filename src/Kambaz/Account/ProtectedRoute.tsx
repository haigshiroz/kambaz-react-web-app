import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";


export default function ProtectedRoute({ children }: { children: any }) {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { cid } = useParams();
    
    // If signed in, proceed
    if (currentUser) {
        // Check if the user is trying to get to a website that they don't have access to
        if (cid !== undefined) {
            // If the user is not enrolled in there, navigate away
            const course = courses.find((c: any) => {return c._id === cid});
            if (!course || !course.enrolled) {
                console.error("Tried to access course not enrolled in: " + cid);
                return <Navigate to="/Kambaz/Dashboard" />;
            }
        }

        return children;
    } else {
        console.error("No current user signed in");
        // Go to sign in page
        return <Navigate to="/Kambaz/Account/Signin" />;
    }
}
