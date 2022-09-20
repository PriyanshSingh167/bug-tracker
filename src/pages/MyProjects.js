import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

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

  return (
    <div className="category">
      <header>
        <p className="pageHeader">My Projects</p>
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
                      <p>{listings.data.name}</p>
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
  );
};

export default MyProjects;
