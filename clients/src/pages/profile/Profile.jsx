import { useEffect, useState } from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { getUser } from "../../redux/features/auth/authSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "",
    address: user?.address || {},
  };
  const [profile, setProfile] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user == null) {
      dispatch(getUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        role: user?.role || "",
        address: user?.address || {},
      });
    }
  }, [dispatch, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  const handleImageChange = () => {};
  const saveProfile = async () => {};

  return (
    <>
      <section style={{ marginTop: "40px" }}>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card cardClass="card">
              {!isLoading && (
                <>
                  <div className="profile-photo">
                    <h2>profile</h2>
                  </div>
                  <form onSubmit={saveProfile}>
                    <p>
                      <label htmlFor="">Change Photo:</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                      />
                    </p>
                    <p>
                      <label htmlFor="">Name :</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        value={profile?.name}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label htmlFor="">Your Email:</label>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        name="Your Email"
                        value={profile?.email}
                        onChange={handleInputChange}
                        disabled
                      />
                    </p>
                    <p>
                      <label htmlFor="">Phone :</label>
                      <input
                        type="text"
                        name="Your Phone Number"
                        placeholder="+95 93330 00327"
                        value={profile?.phone}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label htmlFor="">Address :</label>
                      <input
                        type="text"
                        placeholder="Yangon, Kamayut Township"
                        name="Your Address"
                        value={profile?.address?.address}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label htmlFor="">State :</label>
                      <input
                        type="text"
                        placeholder="Shan state"
                        name="Your State"
                        value={profile?.address?.state}
                        onChange={handleInputChange}
                      />
                    </p>
                    <p>
                      <label htmlFor="">Country :</label>
                      <input
                        type="text"
                        placeholder="Myanmar"
                        name="Your Country"
                        value={profile?.address?.country}
                        onChange={handleInputChange}
                      />
                    </p>
                    <button className="--btn --btn-primary --btn-block">
                      Update Profile
                    </button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
