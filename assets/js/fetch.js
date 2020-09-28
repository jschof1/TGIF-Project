let urlSenate = "https://api.propublica.org/congress/v1/116/senate/members.json"
let urlHouse = "https://api.propublica.org/congress/v1/116/house/members.json"



function siteDet() {
    let req = {
    method: "GET",
    headers: {
            "X-API-Key" : "PbUfho8gAMsc8fzbViK95LjXx7jPpkhBI8b7dBJX"
        }
    };
    if (document.title.includes("senate")) {
        url = urlSenate
        fetchMyFetch(url, req)
}
    else if (document.title.includes("house")) {
    url = urlHouse
    fetchMyFetch(url, req)

}
}
siteDet()

function fetchMyFetch(url, req) {
    fetch(url, req)
    .then(response => response.json())
    .then(function(info){
        let members = info.results[0].members
        if (document.title === "house" || document.title === "senate") {
            addTable(members)
            createEvent(members)
            populateStates(members) 
        }
        else if (document.title.includes("Loyalty")) {
            glanceSum(members)
            glanceTable()
            createLoyalTable('leastLoyal', members);
            createLoyalTable('mostLoyal', members);
        }
        else if (document.title.includes("Atten")) {
            glanceSum(members)
            glanceTable()
            createAttendanceTable('leastEngagedTable', members);
            createAttendanceTable('mostEngagedTable', members);
            
        }

    })

    .catch(error => {
        console.log(error);
    })
    
}
