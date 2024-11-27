const config = {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://portfolio-backend-1-mt75.onrender.com/'  // This will be updated once we deploy the backend
    : 'http://localhost:5000'
};

export default config;
