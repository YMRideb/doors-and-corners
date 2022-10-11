import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getAllResources,
  deleteResourceById,
  updateResourceById,
} from "../services/internalApiService";

const AllResources = (props) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getAllResources()
      .then((data) => {
        setResources(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteResourceById = (idOfResourceToDelete) => {
    deleteResourceById(idOfResourceToDelete)
      .then((data) => {
        /*
      since this page displays all the destinations, the deleted one will still be displayed unless we remove it from state
      but we should only remove it when the delete is successful which happens inside `.then` clause
       */
        const filteredListOfResources = resources.filter((resource) => {
          return resource._id !== idOfResourceToDelete;
        });
        setResources(filteredListOfResources);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {resources.map((resource) => {
        const {
          _id,
          company_name,
          company_contact,
          latest_contact,
          spokane_county,
          grant_county,
          wallawalla_county,
          yakima_county,
        } = resource;

        return (
          <div
            key={_id}
            className="container card-body shadow mb-3 rounded border p-5"
          >
            {/* <Link to={`/resources/${_id}`}>{name}</Link> */}
            <h3>
              Name of Company:
              <br />
              {company_name}
            </h3>
            <p>
              Name of Contact:
              <br />
              {company_contact}
            </p>
            <p>
              Date of last contact:
              <br />
              {latest_contact}
            </p>

            <ol className="list-group">
              {/* display only the `true` seasons. */}
              {spokane_county && (
                <li className="list-group-item">Spokane County</li>
              )}
              {grant_county && (
                <li className="list-group-item">Grant County</li>
              )}
              {wallawalla_county && (
                <li className="list-group-item">Walla Walla County</li>
              )}
              {grant_county && (
                <li className="list-group-item">Grant County</li>
              )}
              {yakima_county && (
                <li className="list-group-item">Yakima County</li>
              )}
            </ol>
            <Link
              to={`/resources/${_id}`}
              className="btn btn-sm btn-outline-danger"
            >
              View Resource
            </Link>
            <button
              onClick={(e) => handleDeleteResourceById(_id)}
              className="btn btn-outline-danger btn-sm"
            >
              Position Filled!
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllResources;
