var userName = "name";

//Get # of stored names from localStorage
storedUserCount= localStorage.getItem("count");
if(storedUserCount == null){
    storedUserCount=0;
}

//Get all the stored names and put into list
userNames = [];
for(var i=0; i<storedUserCount; i++){
    userNames.push(localStorage.getItem(String(i)))
}


//check if userInput is equal to the stored names
var isNewUser=true;
for(var i=0; i<userNames.length; i++){
    if(userNames[i] == userName){
        isNewUser=false;
    }
}

//If its a new user, create an avatar
if(isNewUser){
    //Add new name to local Storage
    localStorage.setItem("count", storedUserCount+1);
    localStorage.setItem(String(storedUserCount+1), userName);

    //Add Avatar to localStorage (Somehow lol)
}



