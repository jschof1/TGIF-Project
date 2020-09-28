// let members = data.results[0].members

// // add links, add middle names

// function makeTable (){
//         for(let i=0; i<members.length; i++){
//             let name = document.createElement('td')
//                 name.textContent = members[i].first_name + ' ' + members[i].last_name 
//             let state = document.createElement('td')
//                 state.textContent = members[i].state
//             let party = document.createElement("td");
//                 party.textContent = members[i].party
//             let senior = document.createElement("td");
//                 senior.textContent = members[i].seniority
//             let votes = document.createElement("td")
//                  votes.textContent = members[i].votes_with_party_pct
        
//         let row = document.createElement("tr")
//             row.appendChild(name)
//             row.appendChild(state)
//             row.appendChild(party)
//             row.appendChild(senior)
//             row.appendChild(votes)
        
//         table.appendChild(row)
//         }
    
// }

// makeTable()

// //go through members list
// // create event click
// // if i click on democrats, only show democrats etc

// //declare members object so that it can be accessed
// //create varaible that accesses the checkbox input element
// //create an empty array var
// //create a loop
// //in the loop say if the checkboxes are checked then push the value of the checkboxes i.e. states, into array
// //outside of loop we can create a function which filters what memebers have been selected
// //we neeed to create a new array
// // first we say if there are not memebers then show all members
// // then we say if there are members that are members that are in that party then push members into the fitlered members array

// function checkboxFilter(){
//     let members = data.results[0].members
//     let checkbox = document.querySelectorAll('input[type="checkbox"]')
//     checkbox.addEventListener("change".function(e){
//         if(checkbox.checked === true){
//           checkboxesValue.checked(checkboxes[i].value)
//         }
//     }

// // function searchBarFilter(){
// //     let members = data.results[0].members
// //     let filter = document.getElementById("myinput").value.toUpperCase()
// //     let table = document.getElementById("myTable")
// //     let row = doc.getElementsByTagName("tr")

// //     for (i = 0; i < tr.length; i++){
// //         let td = row[i].getElementsByTagName("td")[0]
// //         if (td) {
// //             let txtValue = td.textContent || td.innerText;
// //             if (txtValue.toUpperCase().indexOf(filter) > -1)
// //             {
// //                 tr[i].style.display = "";
// //             } else {
// //                 tr[i].style.display = "none";
// //             }
// //         }
// //     }
// // }

// // checkboxFilter()