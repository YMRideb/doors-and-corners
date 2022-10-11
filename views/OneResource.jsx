import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getResourceById } from "../services/internalApiService";

export const OneResource = (props) => {
  const { id } = useParams();
  const [Resource, setResource] = useState(null);

  useEffect(() => {
    getResourceById(id)
      .then((data) => {
        setResource(data);
      })
      .catch(console.log(Error));
  }, [id]);

  if (Resource === null) {
    return (
      <h3 className="text-danger">
        ..No idea what you're talking about || Error 404: Page not found
      </h3>
    );
  }

  //we can safely use the data to render and destructure now
  //since we checked if the data is null
  const {
    company_name,
    company_contact,
    company_focus,
    company_phone,
    contact_email,
    contact_linkedin,
    latest_contact,
    additional_notes,
    spokane_county,
    grant_county,
    wallawalla_county,
    yakima_county,
  } = Resource;

  return (
    <>
      <div className="container-fluid shadow-lg ">
        <h6>JSON id: {id}</h6>
      </div>
      <div className="card container mx-5 shadow-lg">
        <h2>
          This is the resource contacted:
          <br />
          {company_name}
        </h2>
        <p>
          This is the person contacted at the company:
          <br />
          {company_contact}
        </p>
        <h3>This is the focus, or tagline of the company:</h3>
        <h2>{company_focus}</h2>
      </div>

      <div className="card mx-3 shadow-lg">
        <h2>This is the person / team we contacted last:</h2>
        <h2>{company_contact}</h2>
        <h3>
          Phone Number:
          <br />
          {company_phone}
        </h3>
        <p>
          Email Address:
          <br />
          {contact_email}
        </p>
        <p>
          LinkedIn:
          <br />
          {contact_linkedin}
        </p>
        <p>
          This was the last contact with the company:
          <br />
          {latest_contact}
        </p>
        <p>
          Some additional notes:
          {additional_notes}
        </p>
      </div>
    </>
  );
};
export default OneResource;
