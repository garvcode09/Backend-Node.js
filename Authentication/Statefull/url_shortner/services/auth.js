const sessionMap = new Map()

function handleCreateSession(uid,user) {
    try {
        
      sessionMap.set(uid,user._id)

    } catch (error) {
        console.log("error in auth service");
        
    }
}

function handleFindUserByUid(uid) {
    try {
        const user =  sessionMap.get(uid)
        return user
    } catch (error) {
        console.log("error at auth service finduser method");
        
    }
   
}

module.exports = {
    handleCreateSession,handleFindUserByUid
}