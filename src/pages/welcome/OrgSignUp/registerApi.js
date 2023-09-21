import axios from "../../../setup/api/axios";
export const register = async (User) => {
  const response = await axios.post("http://localhost:3000/auth/signup", {
    fullname: User["org_name"].trim(),
    username: User["org_id"].trim(),
    email: User["org_email"].trim(),
    password: User["password"].trim(),
    address:User["address"],
    role: 1,
  });
  return response.status;
};
