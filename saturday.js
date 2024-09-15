let names=[];
function addNames(addname){
    names.push(addname)
    console.log(`.....................................`)
    console.log(`Added "${addname}" to the list`)
    console.log(`.....................................`)
    list()
}
function list(index,name){
    names.forEach(function(name,index){
        console.log(`${index+1}. ${name}`)
    })
}

function removeNames(remName){
    const index = names.indexOf(remName)
    console.log(`.....................................`)
    if(index!=-1){
        names.splice(index)
        console.log(`Removed "${remName}" from the list`)
    }
    else{
        console.log(`"${remName}" not found`)
    }
    console.log(`.....................................`)
    list()
    console.log(`.....................................`)
}
function uptadeNames(oldName,newName){
    const index= names.indexOf(oldName)
    console.log(`.....................................`)
    if(index!=-1){
        names.splice(index,1,newName)
        console.log(`Changed name from "${oldName}" to "${newName}"`)
    }
    else{
        console.log(`Can't find "${oldName}" from the list`)
    }
    console.log(`.....................................`)
    list()
    console.log(`.....................................`)
}


addNames("Jerry")
addNames("B-Jayree")
addNames('Gojan')
addNames("Sally")
removeNames("Sally")
uptadeNames("Jerry","JERRY")
uptadeNames("B-Jayree","SARUTO")
uptadeNames("Gojan","Gojland")
uptadeNames("Sally","lucy")

