import { useState, useContext } from "react";
import { AppContext } from "../../context";
import { StepsAdmin } from "../../containers/stepsAdmin/stepsAdminProperties/stepsAdminProperties";
import { Navbar } from "../../components/navbar/navbar";

export const CreatePropertie = () => {
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    typeOperation: "",
    type: "",
    state: "",
    address: "",
    country: "",
    city: "",
    environments: "",
    meters: "",
    rooms: "",
    bathrooms: "",
    price: "",
    description: "",
    phone: " ",
    email: " ",
    urlImage: [
      "1-s7aIBGDKuRDDEDu7OhI8gFHMHtZNzs6",
      "1Q6C2lRN0LEnkSoHsrrID_He1uGe-a30E",
      "1Ho4wjU-n0rGFmHpEZSZvCWST8ugSy7Oz",
    ],
  });

  const { JWT } = useContext(AppContext);

  const TOKEN = JWT.token;

  const sendData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return false;
      })
      .catch((err) => {
        console.log(err);
        return true;
      });
  };
  return (
    <>
      <Navbar />
      <StepsAdmin
        data={data}
        setData={setData}
        error={error}
        setError={setError}
        sendData={sendData}
      />
    </>
  );
};
