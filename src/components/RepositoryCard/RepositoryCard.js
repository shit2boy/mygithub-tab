import React from "react";
import "./Repo.css";
import { Link } from "react-router-dom";

const RepositoryCard = ({ repos }) => {
  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card col-12 ">
          <h4 className="repo-text">
            <Link to="/"> {repo.name}</Link>
          </h4>
          <div className="d-flex justify-content-between">
            <div className="left-item col-3">
              <small>
                <i className="fas fa-code-branch" /> forked from
                {repo.forks_url}
              </small>
              <p>{repo.description}</p>
              <div className="">
                <small>
                  {" "}
                  <i
                    className="fas fa-circle"
                    style={{ color: "#f1e05a" }}
                  />{" "}
                  {repo.language}
                </small>{" "}
                <small>Updated {repo.updated_at}</small>
              </div>
            </div>
            <div className="right-col">
              <div className="badge py-2 px-3 badge-light">
                <span className="fas fa-star"> star</span>
              </div>

              <div>
                <hr style={{ backgroundColor: "green" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
// Repos.propTypes = {
//   repos: PropTypes.array.isRequired,
// };
// RepoItems.protoTypes = {
//   repo: PropTypes.object.isRequired,
// };
export default RepositoryCard;
