import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createResource } from "../services/internalApiService";

export const NewResource = (props) => {
  const [company_name, setCompany_name] = useState("");
  const [company_focus, setCompany_focus] = useState("");
  const [company_phone, setCompany_phone] = useState(null);
  const [company_contact, setCompany_contact] = useState("");
  const [contact_email, setContact_email] = useState("");
  const [contact_linkedin, setContact_linkedin] = useState("");
  const [latest_contact, setLatest_contact] = useState("");
  const [additional_notes, setAdditional_notes] = useState("");
  const [spokane_county, setSpokane_county] = useState(true);
  const [grant_county, setGrant_county] = useState(false);
  const [wallawalla_county, setWallawalla_county] = useState(false);
  const [yakima_county, setYakima_county] = useState(false);

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleNewResourceSubmit = (e) => {
    e.preventDefault();

    const NewResource = {
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
    };

    createResource(NewResource)
      .then((data) => {
        /**
         * The services (internalApiService) only returns the data
         * If you are using axios directly, you only get res and
         * need to do `res.data` *
         */
        console.log("new resource data: ", data);
        navigate(`/resources`);
      })
      .catch((error) => {
        //most likely will be a validation error
        setErrors(error.response?.data?.errors); //optional chaining [in google]
        console.log(error.response);
      });
  };

  return (
    <>
      <div className="container">
        <h2>Please enter your new resource information below:</h2>
        <form
          onSubmit={(event) => {
            handleNewResourceSubmit(event);
          }}
        >
          <div className="form-group">
            <div className="card card-header mb-3">
              <label>Name of Company:</label>
              {
                //adding error messaging specifically for the company name
                errors?.company_name && (
                  <span style={{ color: "red" }}>
                    {errors.company_name?.message}
                  </span>
                )
              }
              <input
                onChange={(event) => {
                  setCompany_name(event.target.value);
                }}
                type="text"
                className="form-control"
              />
              <div className="form-group">
                <label>Tagline:</label>
                {
                  //adding error messaging specifically for the company focus
                  errors?.company_focus && (
                    <span style={{ color: "red" }}>
                      {errors.company_focus?.message}
                    </span>
                  )
                }
                <input
                  onChange={(event) => {
                    setCompany_focus(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                {
                  //adding error messaging specifically for the company phone number
                  errors?.company_phone && (
                    <span style={{ color: "red" }}>
                      {errors.company_phone?.message}
                    </span>
                  )
                }
                <input
                  onChange={(event) => {
                    setCompany_phone(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          {/**
//=============================================================================
    // Separating Company fields from Contact fields
//=============================================================================
         */}

          <div className="card card-body bg-success">
            <div className="form-group">
              <label>Name of Contact:</label>
              {
                //adding error messaging specifically for the company contact
                errors?.company_contact && (
                  <span style={{ color: "red" }}>
                    {errors.company_contact?.message}
                  </span>
                )
              }
              <input
                onChange={(event) => {
                  setCompany_contact(event.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Contact email:</label>
              {
                //adding error messaging specifically for the company email
                errors?.contact_email && (
                  <span style={{ color: "red" }}>
                    {errors.contact_email?.message}
                  </span>
                )
              }
              <input
                onChange={(event) => {
                  setContact_email(event.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Contact LinkedIn:</label>
              {
                //adding error messaging specifically for the company linkedIn
                errors?.contact_linkedin && (
                  <span style={{ color: "red" }}>
                    {errors.contact_linkedin?.message}
                  </span>
                )
              }
              <input
                onChange={(event) => {
                  setContact_linkedin(event.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Last contact made:</label>
              {
                //adding error messaging specifically for the company linkedIn
                errors?.latest_contact && (
                  <span style={{ color: "red" }}>
                    {errors.latest_contact?.message}
                  </span>
                )
              }
              <input
                onChange={(event) => {
                  setLatest_contact(event.target.value);
                }}
                type="date"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Additional Notes:</label>
              {
                //adding error messaging specifically for the company linkedIn
                errors?.additional_notes && (
                  <span style={{ color: "red" }}>
                    {errors.contact_linkedin?.message}
                  </span>
                )
              }
              <textarea
                onChange={(event) => {
                  setAdditional_notes(event.target.value);
                }}
                type="textarea"
                className="form-control"
              />
            </div>
          </div>
          {/**
//=============================================================================
    // Separating County checkboxes from Contact fields
//=============================================================================
         */}

          <h3>Please select a county.</h3>
          <div className="form-check">
            <label className="h6 form-check-label">Spokane County</label>
            <input
              onChange={(event) => {
                setSpokane_county(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
            />
          </div>

          <div className="form-check">
            <label className="h6 form-check-label">Grant County</label>
            <input
              onChange={(event) => {
                setGrant_county(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
            />
          </div>

          <div className="form-check">
            <label className="h6 form-check-label">Walla Walla County</label>
            <input
              onChange={(event) => {
                setWallawalla_county(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
            />
          </div>

          <div className="form-check">
            <label className="h6 form-check-label">Yakima County</label>
            <input
              onChange={(event) => {
                setYakima_county(event.target.checked);
              }}
              type="checkbox"
              className="form-check-input"
            />
            <br />
            <button className="btn btn-md btn-outline-success">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewResource;
