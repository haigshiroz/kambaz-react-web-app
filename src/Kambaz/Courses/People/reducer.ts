import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,

    reducers: {
        setEnrollments: (state, { payload: enrollments }) => {
            state.enrollments = enrollments;
        },

        addEnrollment: (state, { payload: enrollment }) => {
            const new_enrollment = {
                "_id": uuidv4(),
                "user": enrollment.user,
                "course": enrollment.course,
            }
            state.enrollments = [...state.enrollments, new_enrollment] as any;
        },

        removeEnrollment: (state, { payload: enrollment }) => {
            // Filter such that as long as both the user and the course do not match up, then that course was not the one removed
            state.enrollments = state.enrollments.filter((e: any) => e.user !== enrollment.user || e.course !== enrollment.course);
        },
    },
});

export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;