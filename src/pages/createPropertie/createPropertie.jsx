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
    urlImage: [],
  });
  const { JWT } = useContext(AppContext);

  const TOKEN = JWT.token;

  const sendData = async (data) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/properties`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify(data),
      });
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
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
