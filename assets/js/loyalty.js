//Displaying the 10% most loyal and 10% least loyal



let members = []

let statistics = {
  dems: 0,
  dems_w_p: 0,
  reps: 0,
  reps_w_p: 0,
  indes: 0,
  indes_w_p: 0
};

let setting = {
  method: 'GET',
  headers: {
    'X-API-KEY': 'PbUfho8gAMsc8fzbViK95LjXx7jPpkhBI8b7dBJX'
  }
};

['https://api.propublica.org/congress/v1/116/senate/members.json','https://api.propublica.org/congress/v1/116/house/members.json'].forEach(url=>
  fetch(url,setting)
  .then(response => response.json())
  .then(data => members = [...data.results[0].members, ...members])
  .finally(() => {
    glanceSum();
    glanceTable();
    createAttendanceTable('leastEngagedTable');
    createAttendanceTable('mostEngagedTable');
    createLoyalTable('leastLoyal');
    createLoyalTable('mostLoyal');
  })
)


function glanceSum() {
  members.forEach(members => {
    if (members.party == 'D') {
      statistics.dems++;
      statistics.dems_w_p += members.votes_with_party_pct;
    }

    if (members.party == 'R') {
      statistics.reps++;
      statistics.reps_w_p += members.votes_with_party_pct;
    }
    if (members.party == 'I') {
      statistics.indes++;
      statistics.indes_w_p += members.votes_with_party_pct;
    }
  });
  statistics.avR = statistics.reps_w_p / statistics.reps;
  statistics.avD = statistics.dems_w_p / statistics.dems;
  statistics.avI = statistics.indes_w_p / statistics.indes;
}

function glanceTable() {
  let repV = document.getElementById('repVWP');
  repV.innerHTML = statistics.avR.toFixed() + '%';

  let demV = document.getElementById('demVWP');
  demV.innerHTML = statistics.avD.toFixed() + '%';

  let inV = document.getElementById('inVWP');
  inV.innerHTML = statistics.avI.toFixed() + '%';

  let rAmount = document.getElementById('rReps');
  rAmount.innerHTML = statistics.reps++;

  let dAmount = document.getElementById('dReps');
  dAmount.innerHTML = statistics.dems++;

  let inAmount = document.getElementById('iReps');
  inAmount.innerHTML = statistics.indes++;
}

function createAttendanceTable(id) {
  let atTable = document.getElementById(id);
  let sortedMembers;
  if (id == 'leastEngagedTable') {
    // desc
    sortedMembers = members.sort(function(a, b) {
      return b.missed_votes_pct - a.missed_votes_pct
    });
  } else {
    // ascending
    sortedMembers = members.sort(function(a, b) {
      return a.missed_votes_pct - b.missed_votes_pct
    });
  }

  let result = sortedMembers.slice(0, Math.floor(0.1 * sortedMembers.length)); 
  
  for (let i = 0; i < result.length; i++) {
    let row = document.createElement('tr');
    
    let name = document.createElement('td');
    name.textContent = result[i].first_name + " " + result[i].last_name;
    
    let missed = document.createElement('td');
    missed.textContent = result[i].missed_votes;

    let missedPct = document.createElement('td');
    missedPct.textContent = result[i].missed_votes_pct + "%";

    row.appendChild(name);
    row.appendChild(missed);
    row.appendChild(missedPct);
    atTable.appendChild(row);
  }
}

function createLoyalTable(id) {
  let loyTable = document.getElementById(id);
  let sortedMembers;
  if (id == 'leastLoyal') {
    // desc
    sortedMembers = members.sort(function(a, b) {
      return b.votes_with_party_pct - a.votes_with_party_pct
    });
  } else {
    // ascending
    sortedMembers = members.sort(function(a, b) {
      return a.votes_with_party_pct - b.votes_with_party_pct
    });
  }
  let result = sortedMembers.slice(0, Math.floor(0.1 * sortedMembers.length)); // result is top 10 % or bottom 10% based on what id is sent.
  
  for (let i = 0; i < result.length; i++) {
    let row = document.createElement('tr');
    
    let name = document.createElement('td');
    name.textContent = result[i].first_name + " " + result[i].last_name;
    
    let amount = document.createElement('td');
    amount.textContent = result[i].total_votes;

    let votesWith = document.createElement('td');
    votesWith.textContent = result[i].votes_with_party_pct + "%";

    row.appendChild(name);
    row.appendChild(amount);
    row.appendChild(votesWith);
    loyTable.appendChild(row);
  }
}