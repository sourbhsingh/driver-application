import { useEffect, useState } from "react";
import Course1 from "./course1.png";
import Course2 from "./course2.jpg";

import {
    NavLink,
} from "react-router-dom";

interface Tutor {
    ID: number;
    name: string;
    username: string;
    dp: string;
}

interface Course {
    ID: number;
    title: string;
    tutor: Tutor;
    duration: string;
    poster: string;
}

function HomePage() {

    useEffect(() => {
        document.title = "Driver Courses";
    }, []);

    const [popularCourse] = useState<Course[]>([
        {
            ID: 1,
            title: "Learning How to Drive in 60 minutes",
            tutor: {
                ID: 1,
                name: "Lana Marandina",
                username: "lanamara",
                dp: "https://randomuser.me/api/portraits/women/59.jpg" + 1,
            },
            duration: "82 min",
            poster: Course1
        },
        {
            ID: 2,
            title: "CLearning new Technics and Tricks to become pro driver.",
            tutor: {
                ID: 2,
                name: "Uran Design",
                username: "urancd",
                dp: "https://randomuser.me/api/portraits/men/58.jpg" + 2,
            },
            duration: "1 hr 13 min",
            poster: Course2
        }
    ]);

    const [topTutors] = useState<Tutor[]>([
        {
            ID: 1,
            name: "Lana Marandina",
            username: "lanamara",
            dp: "https://randomuser.me/api/portraits/women/59.jpg" + 1,
        },
        {
            ID: 2,
            name: "John Cina",
            username: "John Cina",
            dp: "https://randomuser.me/api/portraits/med/men/48.jpg" + 2,
        },
        {
            ID: 3,
            name: "Emma Waston",
            username: "Emma",
            dp: "https://randomuser.me/api/portraits/women/15.jpg" + 3,
        },
        {
            ID: 4,
            name: "Ronaldo",
            username: "Ronaldo",
            dp: "https://randomuser.me/api/portraits/men/18.jpg" + 4,
        },
        {
            ID: 5,
            name: "Messi",
            username: "Messi",
            dp: "https://randomuser.me/api/portraits/men/34.jpg" + 5,
        },
        {
            ID: 6,
            name: "Rajani",
            username: "rajan",
            dp: "https://randomuser.me/api/portraits/women/39.jpg" + 6,
        }
    ]);

    // Live Tutors List
    const tutorList = [];
    for (let i = 0; i < 8; i++) {
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" + i}>
                <img src={"http://placeimg.com/100/100/people?" + i} className="bl" alt={"Live Tutor " + i} />
            </button>
        );
    }

    // Popular Courses List
    const courseList = popularCourse.map((course, index) => (
        <NavLink to={"/course/" + course.ID} className="course rel" key={"popular-course-" + index}>
            <div className="block rel" style={{
                background: `#e2e2e2 url(${course.poster}) no-repeat center`
            }}>

                <div className="user abs aic flex">
                    <div className="pic">
                        <img src={course.tutor.dp} className="bl" alt={course.tutor.name} />
                    </div>
                    <div className="meta rel">
                        <h2 className="s15 name fontb cfff">{course.tutor.name}</h2>
                        <h2 className="s13 uname fontn cfff">@{course.tutor.username}</h2>
                    </div>
                </div>

                <div className="dura abs">
                    <h2 className="s13 name fontb cfff">{course.duration}</h2>
                </div>

                <div className="course-title abs">
                    <h2 className="s15 name fontb cfff">{course.title}</h2>
                </div>

            </div>
        </NavLink>
    ));

    // Top Tutors List
    const topTutorsList = topTutors.map((tutor, index) => (
        <a href="#" className="user-block rel noul" key={"top-tutors-" + index}>
            <div className="user aic flex">
                <div className="pic">
                    <img src={tutor.dp} className="bl" alt={tutor.name} />
                </div>
                <div className="meta rel">
                    <h2 className="s15 name fontb c333">{tutor.name}</h2>
                    <h2 className="s13 uname fontn c333">@{tutor.username}</h2>
                </div>
            </div>
        </a>
    ));

    return (
        <div className="home-page rel">

            {/** Tutors Live Now */}
            <div className="section rel">
                <h2 className="title s24 fontb">Streaming <span className="fontn">Now</span></h2>
                <div className="tutors rel flex">
                    {tutorList}
                </div>
            </div>

            {/** Popular Courses */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Popular <span className="fontn">This Week</span></h2>
                <div className="courses rel flex">
                    {courseList}
                </div>
            </div>

            {/** Top Tutors */}
            <div className="section section-b rel">
                <h2 className="title s24 fontb">Top <span className="fontn">Tutors</span></h2>
                <div className="top-tutors rel flex">
                    {topTutorsList}
                </div>
            </div>

        </div>
    );
}

export default HomePage;
