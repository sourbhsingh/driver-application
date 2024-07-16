import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import CourseCard from './CourseCard';

// Import PNG icons
import ConfidentIcon from './icons/confident.png';
import SafeIcon from './icons/safe.png';
import RoadSignsIcon from './icons/road-signs.png';
import TechnicalSkillsIcon from './icons/technical-skills.png';

// Interface for course data
interface CourseData {
  title: string;
  description: string;
  icon: string; // Use string for PNG icons
  onClick: () => void;
}

// DriverTrainingSection component
const DriverTrainingSection: React.FC = () => {
  const navigate = useNavigate();

  // Array of course data
  const courseData: CourseData[] = [
    {
      title: 'Confident Driving',
      description: 'Become a confident driver with skills that help you navigate various road conditions safely.',
      icon: ConfidentIcon, // Using imported PNG icon
      onClick: () => navigate('/training'),
    },
    {
      title: 'Safe Driving',
      description: 'Learn safe driving practices and techniques to protect yourself and others on the road.',
      icon: SafeIcon, // Using imported PNG icon
      onClick: () => navigate('/training'),
    },
    {
      title: 'Road Signs Knowledge',
      description: 'Master road signs and their meanings to enhance your understanding and compliance with traffic regulations.',
      icon: RoadSignsIcon, // Using imported PNG icon
      onClick: () => navigate('/training'),
    },
    {
      title: 'Good Technical Skills',
      description: 'Develop strong technical skills to maintain and handle vehicles effectively, ensuring smooth driving experiences.',
      icon: TechnicalSkillsIcon, // Using imported PNG icon
      onClick: () => navigate('/training'),
    },
  ];

  return (
    <section className="p-8 w-full max-w-screen-lg mx-auto">
      <Row justify="center" gutter={[16, 16]}>
        {courseData.map((course, index) => (
          <Col key={index}>
            <CourseCard
              title={course.title}
              description={course.description}
              icon={<img src={course.icon} alt={course.title} />} // Render PNG icon as an image
              onClick={course.onClick}
            />
          </Col>
        ))}
      </Row>

      <div className="flex justify-center mt-12">
        <div
          className="card w-full max-w-lg bg-blue-600 text-white shadow-lg cursor-pointer p-8 text-center rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate('/training')}
        >
          <h3 className="text-3xl font-bold mb-4">Go to Training</h3>
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverTrainingSection;
