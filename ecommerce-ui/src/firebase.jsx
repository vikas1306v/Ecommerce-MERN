
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5K2nRTEQXjS36NzC7fqNAgK6LPDZhB2s",
  authDomain: "ecommerce-2eeef.firebaseapp.com",
  projectId: "ecommerce-2eeef",
  storageBucket: "ecommerce-2eeef.appspot.com",
  messagingSenderId: "388330888293",
  appId: "1:388330888293:web:d19b8bbb5b9c72cb393a8c",
  measurementId: "G-302ST94NZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app