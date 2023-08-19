export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.example.com' : 'http://localhost:3001';

export const urlForAllFeedback = `${baseUrl}/feedback`;
export const urlForFeedbackCreation = `${baseUrl}/feedback`;
export const urlForAllFeedbackStatusChange = `${urlForAllFeedback}/status`;
