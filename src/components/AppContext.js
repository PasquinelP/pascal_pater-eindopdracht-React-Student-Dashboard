import React, { useState, createContext } from 'react';
import studentsData from '../studentsData';

export const AppContext = createContext();

export const AppProvider = (props) => {
  
  const [students, setStudents] = useState(studentsData);


  return (
    <AppContext.Provider value={{ students, setStudents }}>
      {props.children}
    </AppContext.Provider>
  );
};
