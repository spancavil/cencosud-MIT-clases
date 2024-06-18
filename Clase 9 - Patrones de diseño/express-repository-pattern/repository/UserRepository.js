//Complete

// {id: number, name: string}
const users = []

//CRUD - Create Read Update Delete
//ABM - Alta Baja Modificacion

export const UserRepository = {
    getUsers: async function () {
        return users
    },

    getUserById: async function (id) {
        return users.find(user => user.id === id)
    },

    postUser: async function (name) {
        const userToAdd = {
            id: users.length + 1,
            //equal to name: name
            name 
        }
        users.push(userToAdd)
        return userToAdd
    },

    updateUser: async function(name, id) {
        //1st: get the user to update
        const userToUpdate = this.getUserById(id)
        userToUpdate.name = name
        return userToUpdate
    },

    deleteUser: async function() {
        return ""
    }
}