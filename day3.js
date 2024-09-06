let tasks =[
    ["Work",["Complete the report","Email the team","Call the client"]],
    ["Personal",["Buy groceries","Pickup the kids","Do laundry"]]

]
// Funtion to display tasks and their category
function displayCategorizedTasks(){
    tasks.forEach((category)=> {
        console.log(`\t ${category[0]} task :`)
        category[1].forEach((task,index)=>{
            console.log(`\t\t ${index + 1}. ${task}`)
        }) 
    }) 
}
displayCategorizedTasks()