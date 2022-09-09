import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
function Avatar() {
  const auth = getAuth();

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  let image = user
    ? `https://avatars.dicebear.com/api/male/${user?.uid}.svg?mood[]=happy&mood[]=sad`
    : "https://cdn2.iconfinder.com/data/icons/mobile-banking-ver-1a/100/1-11-512.png";
  return <img className="circle-img" src={image} alt="avatar_img" />;
}

export default Avatar;
