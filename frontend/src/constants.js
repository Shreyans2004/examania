const baseUrl = process.env.REACT_APP_BACKEND_URL  || "http://localhost:8000" ;

const API_URLS = {
  SIGNUP: `${baseUrl}/api/auth/signup/`,
  LOGIN: `${baseUrl}/api/auth/login/`,
  LOGOUT: `${baseUrl}/api/auth/logout/`,
  VERIFY_USER: `${baseUrl}/api/auth/verify-user/`,
  START_TEST : `${baseUrl}/api/test/start-test/`,
  GET_QUESTIONS: `${baseUrl}/api/test/questions/`,
  GET_QUESTION: `${baseUrl}/api/test/questions/`,
  SUBMIT_TEST: `${baseUrl}/api/test/submit-test/`,
  GET_EXAMS: `${baseUrl}/api/exams/`,
  GET_TESTS: `${baseUrl}/api/tests/`,
  GET_TEST_REPORT: `${baseUrl}/api/test-report/`,
  ADD_QUESTION: `${baseUrl}/api/questions/`,
}

export default API_URLS;