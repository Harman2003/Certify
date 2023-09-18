import axios from "../../../setup/api/axios";
export const register = async (User) => {
    
        const response = await axios.post('http://localhost:3000/auth/signup', {
            fullname: User['Full Name'].trim(),
            username: User['Username'].trim(),
            email: User['E-mail Address'].trim(),
            password: User['Password'].trim(),
            role:1,
        })
    return response.status;
}
