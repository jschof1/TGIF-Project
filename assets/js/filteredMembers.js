

let members = data.results[0].members;
let stateSelector = document.getElementById('stateSelector')

function addTable(obj) {
  let member = obj
    let table = document.getElementById("table");
    table.innerHTML = ""
    for (let i = 0; i < member.length; i++) {
        let firstName = member[i].first_name;
        let lastName = member[i].last_name;
        let midName = member[i].middle_name;
        if (midName == null) {
            midName = "";
        }
        let fullName = firstName + " " + midName + " " + lastName;
        let urlName = member[i].url;
        let row = document.createElement("tr");
        let ancor = document.createElement("a");
        ancor.setAttribute("href", urlName)
        let nameCell = document.createElement("td");
        let partyCell = document.createElement("td");
        let stateCell = document.createElement("td");
        let seniorCell = document.createElement("td");
        let votesCell = document.createElement("td")
        nameCell.appendChild(ancor)
        ancor.innerHTML = fullName;
        let party = member[i].party;
        partyCell.innerHTML=party;
        let state = member[i].state;
        stateCell.innerHTML=state;
        let seniority = member[i].seniority;
        seniorCell.innerHTML=seniority;
        let votes = member[i].votes_with_party_pct;
        votesCell.innerHTML=votes;
        row.appendChild(nameCell);
        row.appendChild(partyCell);
        row.appendChild(stateCell);
        row.appendChild(seniorCell);
        row.appendChild(votesCell)
        table.appendChild(row);
        
    }
}
addTable(members)

  document.getElementById("check_democrat").oninput = function(event){
    filter(event)
  }
  document.getElementById("check_republican").onchange = function(event){
    filter(event)
  }
  document.getElementById("check_independent").onchange = function(event){
    filter(event)
  }


function filter(e){
  if(e.target.checked){
    let filtered = members.filter(i=> i.party == e.target.value);
    addTable(filtered)
    members = filtered;
  }else{
    members = data.results[0].members;
    addTable(members)
  }
}

function populateStates() {
  let states = [];

  for (let i = 0; i < members.length; i++) {
    if (!states.includes(members[i].state)) {
      states.push(members[i].state)
    }
  }
  states.sort();
  console.log(states)

  let defaultOption = document.createElement('option');
  defaultOption.innerHTML = 'All States';
  defaultOption.value = '';
  stateSelector.appendChild(defaultOption);

  for (let i = 0; i < states.length; i++) {
    let option = document.createElement('option');
    option.innerHTML = states[i];
    stateSelector.appendChild(option);
  }
}
populateStates();

stateSelector.onchange = function(){
  if(this.value){
    let filtered = members.filter(i=> i.state == this.value);
    addTable(filtered)
    members = filtered;
  }else{
    members = data.results[0].members;
    addTable(members)
  }
}




