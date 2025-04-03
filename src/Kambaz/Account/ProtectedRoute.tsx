import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";


import { setEnrollments } from "../Courses/People/reducer";
import * as enrollmentClient from "../Courses/People/client";

export default function ProtectedRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { cid } = useParams();

    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    // Used to make sure we wait for enrollments to come in before we check if the protected routes
    const getEnrollments = async () => {
        try {
            const enrollments = await enrollmentClient.getEnrollments();
            dispatch(setEnrollments(enrollments));
        } catch (error) {
            console.error(error);
        }
        setPending(false)
    };
    useEffect(() => {
        getEnrollments();
    }, []);



    // If signed in, proceed
    if (currentUser) {
        // Check if the user is trying to get to a website that they don't have access to
        if (cid !== undefined) {
            // Wait for the enrollments to load

            if (pending) {
                return;
            }

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
