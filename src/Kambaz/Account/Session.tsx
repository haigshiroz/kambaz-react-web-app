import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setCourses } from "../Courses/reducer"
import { setCurrentUser } from "./reducer";
import * as userClient from "../Account/client";
import * as client from "./client";


export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            // Set user
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));

            // Get the courses with enrolled status
            try {
                let courses = await userClient.findCoursesForUser(currentUser._id);
                courses = courses.map((c: any) => { return { ...c, enrolled: true } });
                dispatch(setCourses(courses));
            } catch (error) {
                console.error(JSON.stringify(error));
            }
        } catch (err: any) {
            console.error("Error in fetchProfile Session.tsx:\n" + JSON.stringify(err));
        }
        setPending(false);
    };

    // When first loaded
    useEffect(() => {
        fetchProfile();
    }, []);

    if (!pending) {
        return children;
    }
}
