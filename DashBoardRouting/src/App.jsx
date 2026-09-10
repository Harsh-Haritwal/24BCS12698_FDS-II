import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <h2>Contact page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Send msg" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        {" | "}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Profile() {
  return <h1>Profile</h1>;
}
function Settings() {
  return <h1>Settings</h1>;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          {"|"}
          <Link to="/about">About</Link>
          {"|"}
          <Link to="/contact">Contact</Link>
          {"|"}
          <Link to="/dashboard">Dashboard</Link>
          {"|"}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<h3>Please select a dashboard option.</h3>} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
