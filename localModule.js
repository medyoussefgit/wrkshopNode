function getUser(tab,searchName) {
    if (tab.find((e)=>e.name===searchName)) {
        return tab.find((e)=>e.name===searchName)
    }
    return "not exist"
}

function moyen(tab) {
    return tab.map((e)=>e.moy).reduce(
        (acc,current)=>(acc+current))/tab.length
    
    
}
module.exports={getUser,moyen}