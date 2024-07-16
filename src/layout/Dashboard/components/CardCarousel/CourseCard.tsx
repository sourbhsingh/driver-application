import React from 'react';
import { Card, Button } from 'antd';
import './CourseCard.css';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon, onClick }) => (
  <Card className="course-card" onClick={onClick}>
    <div className="course-icon">
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <Button type="primary">Learn More</Button>
  </Card>
);

export default CourseCard;
