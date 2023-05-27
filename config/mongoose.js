const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://kajabee9160:EBmW3GrwFKLXCZ26@cluster0.4b7jo5s.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));