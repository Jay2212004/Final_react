import React, { createContext, useContext, useReducer } from 'react';

const FormDataContext = createContext();

const initialState = {
  firstName: '',
  // Add other form fields here
};

function formDataReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export function FormDataProvider({ children }) {
  const [formData, dispatch] = useReducer(formDataReducer, initialState);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}
