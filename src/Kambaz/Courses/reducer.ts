import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const createEmptyCourse = () => {
    return {
        _id: "New id",
        name: "New Course",
        number: "New Number",
        startDate: JSON.stringify(new Date()),
        endDate: JSON.stringify(new Date()),
        department: "New Department",
        credits: 4,
        description: "New Description",
        image_src: undefined,
    }
}


const initialState = {
    courses: courses,
    course: createEmptyCourse(),
};


const coursesSlice = createSlice({
    name: "courses",
    initialState,

    reducers: {
        addNewCourse: (state,) => {
            state.courses = [...state.courses, { ...state.course, _id: uuidv4() }] as any;
            state.course = createEmptyCourse();
        },

        setCourse: (state, { payload: course }) => {
            state.course = course;
        },

        deleteCourse: (state, { payload: courseId }) => {
            state.courses = courses.filter((c: any) => c._id !== courseId);
        },

        updateCourse: (state,) => {
            state.courses = state.courses.map((c: any) => c._id === state.course._id ? state.course : c);
        },
    }
});

export const { addNewCourse, setCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
