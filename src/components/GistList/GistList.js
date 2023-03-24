import React, { Fragment, useEffect, useState } from "react";
import { getGistForUser, getPublicGists } from "../../services/gistService";
import { Gist } from "../Gist/Gist";
import { gistListStyles } from "./Styles";
import toast from "react-hot-toast";

export const GistList = ({ searchKeyword }) => {
  const [gists, setGists] = useState([]);

  // Get gists by username
  useEffect(() => {
    if (searchKeyword) {
      getGistForUser(searchKeyword)
        .then((response) => {
          if (response.status === 200) {
            setGists([...response.data]);
          }
        })
        .catch((err) => {
          console.error(`error in fetching gist by username: ${err}`);
          toast.error("Something went wrong");
        });
    }
  }, [searchKeyword]);

  // Get public gists on mount
  useEffect(() => {
    getPublicGists()
      .then((response) => {
        if (response.status === 200) {
          setGists(response.data);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.error(`error in fetching gist public list: ${err}`);
        toast.error("Something went wrong");
      });
  }, []);

  return (
    <div style={gistListStyles.container}>
      {gists.map((gist, index) => (
        <Fragment key={index}>
          <Gist
            image={gist.owner["avatar_url"]}
            userName={gist.owner.login || ""}
            createdAt={gist["created_at"]}
            updatedAt={gist["updated_at"]}
            description={gist.description || ""}
            files={gist.files}
          />

          {/** Divider will not appear on last item */}
          {index < gists.length + 1 && <hr style={gistListStyles.divider} />}
        </Fragment>
      ))}

      {/** Display no result on empty gists */}
      {gists.length === 0 && (
        <h1 style={gistListStyles.noResult}>No result found</h1>
      )}
    </div>
  );
};
