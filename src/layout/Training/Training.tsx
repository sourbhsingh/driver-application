import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TrainingProps } from './interface'; // Assuming TrainingProps interface is defined
import "../../css/uifont.css";
import "../../css/props.css";
import "../../css/App.css";

import Header from "../../screens/header";
import Sidebar from "../../screens/sidebar";
import HomePage from "../../screens/home";
import Rightbar from "../../screens/rightbar";
import CoursePage from "../../screens/course";
import DiscoverPage from "../../screens/discover";
import CategoriesPage from "../../screens/categories";
import MyCoursesPage from "../../screens/mycourses";

function Training({ title, description }: TrainingProps) {
  const [] = useState<boolean>(false);

  return (
    <div className="App flex">
      
      <Sidebar />
          <div className="app-content">
          <Rightbar/>

         
            <h1>{title}</h1>
            <p>{description}</p>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:courseid" element={<CoursePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/my-courses" element={<MyCoursesPage />} />
            </Routes>
           
          </div>
        
    </div>
  );
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        
            <Header />
            <h1>{title}</h1>
            <p>{description}</p>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/course/:courseid" element={<CoursePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/my-courses" element={<MyCoursesPage />} />
            </Routes>
            <Rightbar />
    
    
      </div>
    </div>
  );
}

export default Training;
