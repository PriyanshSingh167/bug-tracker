import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import TopWrapper from "../components/TopWrapper";
import LeftWrapper from "../components/LeftWrapper";
import Spinner from "../components/Spinner";
import ProjectItem from "../components/ProjectItem";

const MyProjects = () => {
  const auth = getAuth();
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get Reference
        const listingRef = collection(db, "listings");

        // Create a query
        const q = query(listingRef, orderBy("timeStamp", "desc"), limit(10));

        // Execute query
        const listings = [];
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch");
      }
    };
    fetchListings();
  }, []);

  const onDelete = async (listingId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Successfully deleted listing");
    }
  };
  return (
    <div className="wrapper">
      <div className="top-wrapper">
        <TopWrapper />
      </div>
      <div className="left-wrapper">
        <LeftWrapper />
      </div>
      <div className="main-wrapper">
        <div className="category">
          <header>
            <p className="pageHeader projectHeader">My Projects</p>
          </header>
          {loading ? (
            <Spinner />
          ) : listings && listings.length > 0 ? (
            <>
              <main>
                <ul className="categoryListings">
                  {listings.map((listings) => (
                    <>
                      {listings.data.projectNo === auth.currentUser.uid ? (
                        <>
                          <ProjectItem
                            listing={listings.data}
                            id={listings.id}
                            key={listings.id}
                            onDelete={() => onDelete(listings.id)}
                          />
                        </>
                      ) : (
                        <> </>
                      )}
                    </>
                  ))}
                </ul>
              </main>
            </>
          ) : (
            <p>No Projects to show</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
