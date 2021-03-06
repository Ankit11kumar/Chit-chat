const users = []

// addUser, removeUser, getUser, getusersinroom

const addUser = ({ id, username, room }) => {

    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if (existingUser) {
        return {
            error: 'Username is already in use!'
        }
    }

    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }

}

// Removing the user

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUserInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}