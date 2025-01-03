import app from "./firebaseConfig";

const App = () => {
  console.log("Firebase App Instance:", app); // This should log your Firebase app instance
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Firebase is configured!</h1>
    </div>
  );
};

export default App;
