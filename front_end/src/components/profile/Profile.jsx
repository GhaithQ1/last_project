
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useUser } from "../Context";
const Profile = () => {
  const {MyData} =useUser()

{/* <div className="profile">
                  <div className="back_img">
                    <img
                      src={
                        MyData.Cover_image
                          ? `http://localhost:8000/user/${MyData.Cover_image}`
                          : "./image/back1.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="profile_all">
                    <img
                      src={
                        MyData.profilImage
                          ? MyData.profilImage.startsWith("http")
                            ? MyData.profilImage
                            : `http://localhost:8000/user/${MyData.profilImage}`
                          : "/image/pngegg.png"
                      }
                      alt={`Image of ${MyData.name}`}
                    />
                    <h2>{MyData.name}</h2>
                    <div className="info_me">
                      <h3>Information:</h3>
                      {MyData.address ? (
                        <p>
                          <span>Addres: </span> {MyData.address}
                        </p>
                      ) : null}
                      {MyData.phone ? (
                        <p>
                          <span>Phone: </span> {MyData.phone}
                        </p>
                      ) : null}
                      <p>
                        <span>Email: </span> {MyData.email}
                      </p>
                    </div>

                    <button onClick={() => Navigate("/update_profile")}>
                      Update
                    </button>
                  </div>
                </div> */}
  return (
    <>
       <div className="profile">
                  <div className="back_img">
                    <img
                      src={
                        MyData.Cover_image
                          ? `http://localhost:8000/user/${MyData.Cover_image}`
                          : "./image/back1.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="profile_all">
                    <img
                      src={
                        MyData.profilImage
                          ? MyData.profilImage.startsWith("http")
                            ? MyData.profilImage
                            : `http://localhost:8000/user/${MyData.profilImage}`
                          : "/image/pngegg.png"
                      }
                      alt={`Image of ${MyData.name}`}
                    />
                    <h2>{MyData.name}</h2>
                    <div className="info_me">
                      <h3>Information:</h3>
                      {MyData.address ? (
                        <p>
                          <span>Addres: </span> {MyData.address}
                        </p>
                      ) : null}
                      {MyData.phone ? (
                        <p>
                          <span>Phone: </span> {MyData.phone}
                        </p>
                      ) : null}
                      <p>
                        <span>Email: </span> {MyData.email}
                      </p>
                    </div>

                    <button onClick={() => Navigate("/update_profile")}>
                      Update
                    </button>
                  </div>
                </div>
 
    </>
  );
};

export default Profile;
