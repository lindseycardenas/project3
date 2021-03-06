import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // Gets the user with the given id
    getsUser: function (id) {
        console.log("in APIU - find one")
        return axios.get("/api/users/" + id);
    },
    updateUser: function (userData) {
        console.log("in APIU - updating")
        return axios.put("/api/users/", userData)
    },
    // Deletes the user with the given id
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id);
    },
    // Saves a user to the database
    saveUser: function (userData) {
        console.log("in APIU - creating");
        return axios.post("/api/users", userData);

    }


};