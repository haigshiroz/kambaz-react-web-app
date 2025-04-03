import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "./reducer";
import { setEnrollments } from "../Courses/People/reducer";
import { setCourses } from "../Courses/reducer";
import { setAssignments } from "../Courses/Assignments/reducer";
import { setModules } from "../Courses/Modules/reducer";

import * as client from "./client";
import * as enrollmentClient from "../Courses/People/client";
import * as coursesClient from "../Courses/client";


export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            // Set user
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));

            // Set enrollments
            const enrollments = await enrollmentClient.getEnrollments();
            dispatch(setEnrollments(enrollments));

            // Set courses
            const serverCourses = await coursesClient.fetchAllCourses();
            dispatch(setCourses(serverCourses));

            // // Set assignments
            // const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
            // dispatch(setAssignments(assignments));        

            // // Set modules
            // const modules = await coursesClient.findModulesForCourse(cid as string);
            // dispatch(setModules(modules));
        } catch (err: any) {
            console.error(err);
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
