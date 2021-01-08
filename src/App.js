import "./App.css";
import Profile from "./components/Aside-Profile/Profile";
import NavigationBar from "./components/NavBar/NavigationBar";
import NavTab from "./components/NavigationTabs/NavTab";
import SelectInput from "./components/SelectInput";
import RepositoryCard from "./components/RepositoryCard/RepositoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);
  const [text, setText] = useState(repos);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `https://api.github.com/users/shit2boy?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      console.log(res.data);
      setUser(res.data);
      setLoading(false);
    };
    const getUserRepos = async () => {
      // this.setState({ loading: true });
      const res = await axios.get(
        `https://api.github.com/users/shit2boy/repos?&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      // this.setState({ user: res.data, loading: false });
      // console.log(this.state.user);
      console.log(res.data);
      setRepos(res.data);
      setText(res.data);
      setLoading(false);
    };
    getUser();
    getUserRepos();
  }, []);

  const onChange = (e) => {
    const searchRepo = repos.filter((item) => {
      console.log(item["name"]);
      console.log(e.target.value);
      return (
        item["name"].toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
    });
    setText(searchRepo);
    if (e.target.value === "") setText(repos);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="">
        <header className="">
          <NavigationBar />
          <NavTab user={user} />
        </header>
        <section className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-3 col-sm-12">
              <Profile user={user} />
            </div>
            <div className="col p-4">
              <div className="row">
                <ul className="d-flex col-12 justify-content-between">
                  <li>
                    <form>
                      <input
                        className="repo-input"
                        type="search"
                        onChange={onChange}
                        name="search"
                        placeholder="find respository..."
                      />
                    </form>
                  </li>
                  <li>
                    <SelectInput value="Type: All" />
                  </li>
                  <li>
                    <SelectInput value="Language: ALL" />
                  </li>
                  <li>
                    <span className="badge py-2 px-4 badge-success">
                      <i className="fas fa-save" /> New
                    </span>
                  </li>
                </ul>
              </div>
              <div className="row">
                <RepositoryCard repos={text} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default App;
