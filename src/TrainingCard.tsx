import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';

import { ReactComponent as ConfidentIcon } from './icons/confident.svg'; // Correct way to import SVG as React component
import { ReactComponent as SafeIcon } from './icons/safe.svg';
import { ReactComponent as RoadSignsIcon } from './icons/road-signs.svg';
import { ReactComponent as TechnicalSkillsIcon } from './icons/technical-skills.svg';
import CourseCard from './../src/layout/Dashboard/components/CardCarousel/CourseCard';

interface CourseData {
  title: string;
  description: string;
  icon: React.ReactNode; // Use React.ReactNode for SVG components
  onClick: () => void;
}

const DriverTrainingSection: React.FC = () => {
  const navigate = useNavigate();

  const courseData: CourseData[] = [
    {
      title: 'Confident Driving',
      description: 'Lorem ipsum dolor sit amet, mea regione diamet principes at.',
      icon: <ConfidentIcon />, // Use imported SVG component directly
      onClick: () => navigate('/training'),
    },
    {
      title: 'Safe Driving',
      description: 'Lorem ipsum dolor sit amet, mea regione diamet principes at.',
      icon: <SafeIcon />,
      onClick: () => navigate('/training'),
    },
    {
      title: 'Road Signs Knowledge',
      description: 'Lorem ipsum dolor sit amet, mea regione diamet principes at.',
      icon: <RoadSignsIcon />,
      onClick: () => navigate('/training'),
    },
    {
      title: 'Good Technical Skills',
      description: 'Lorem ipsum dolor sit amet, mea regione diamet principes at.',
      icon: <TechnicalSkillsIcon />,
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
              icon={course.icon}
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
