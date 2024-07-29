import React from 'react';

interface ProjectProps {
  project: string;
}

const Project: React.FC<ProjectProps> = (p) => {
  // Add your component logic here

  return (
    // JSX code for your component goes here
    <div>
      {p.project}
    </div>
  );
};

export default Project;