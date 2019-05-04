//======modal
$(document).ready(function () {
    $('.modal').modal();
})

var haha;

//=====chips
$('.chips').chips();
$('.chips-initial').chips({
  data: [{
    tag: 'Apple',
  }, {
    tag: 'Microsoft',
  }, {
    tag: 'Google',
  }],
});
$('.chips-placeholder').chips({
  placeholder: 'languages',
  secondaryPlaceholder: '+Language',
});
$('.chips-autocomplete').chips({
  autocompleteOptions: {
    data: {
      'Apple': null,
      'Microsoft': null,
      'Google': null
    },
    limit: Infinity,
    minLength: 1
  }
});     


$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });

//=======floating button
  //$(document).ready(function(){
    //$('.tap-target').tapTarget();
  //})

//=======Sidebar Code
$(document).ready(function(){
  $('.sidenav').sidenav();
})

$('.fixed-action-btn').floatingActionButton({
  toolbarEnabled: true
});




//========================================Actual Code=====================================//

//====Getting classes========//
const name = document.querySelector('.developer_name');
const email = document.querySelector('.developer_email');
const designation = document.querySelector('.developer_designation');
const chips = document.querySelectorAll('.chips');
const salary = document.querySelector('.developer_salary');
const github = document.querySelector('.developer_github');
const linkedin = document.querySelector('.developer_linkedin');
const photo = document.querySelector('.developer_photo');
const button = document.getElementById('submit-button');
const addForm = document.getElementById('addForm');
const clear = document.querySelector(".clear");
const sort = document.querySelector('.sort-btn');


//=====Variables
let LIST=[] , id=0;
name.addEventListener('input' , (e) => {
   haha = e.target.value;
})

//dev detail func()........
function AddDeveloperDetails(name,email,designation,chips,salary,github,linkedin,photo,id,trash) {
  if(trash) {
    return;
  }
    
  //returning whole card's html....
  const devform = `<div id="edit" class="devform #ffffff white lighten-4">
                      <h3 class="card-panel #ffca28 amber lighten-1">Developer${id+1}</h3>
                      <div class="card">
                        <div class="card-content">
                          <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix">account_circle</i>Name:</h6>
                                  <h5>${name}</h5>
                                </div>
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix">email</i>Email:</h6>
                                  <h5>${email}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix">filter_frames</i>Designation:</h6>
                                  <h5>${designation}</h5>
                                </div>
                                <div class="col l6 s12">
                                  
                                <i class="fab fa-python"></i>
                                  <h6>languages:</h6>
                                  <h5>${chips}</h5>                                 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix">euro_symbol</i>Salary:</h6>
                                  <h5>${salary}</h5>
                                </div>
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix"><i class="fab fa-github"></i></i>Github:</h6>
                                  <h5>${github}</h5>                                 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix"><i class="fab fa-linkedin"></i></i>Linkedin:</h6>
                                  <h5>${linkedin}</h5>
                                </div>
                                <div class="col l6 s12">
                                  <h6><i class="material-icons prefix"><i class="fas fa-user-circle"></i></i>Photo URL:</h6>
                                  <h5>${photo}</h5>                                 
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col offset-s8 s2 offset-m10 m1">
                              <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons job="edit" id=${id}">create</i></a>
                            </div>
                            <div class="col s2 m1">
                              <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons" job="delete" id=${id}>delete</i></a>
                            </div>
                        </div>
                      </div>
                    </div>`;

  const position = "beforeend";

  addForm.insertAdjacentHTML(position,devform);

}

//onclick on add button..
button.onclick = function () {
  developer_name = name.value;
  developer_email = email.value;
  developer_designation = designation.value;
  developer_chips = chips.value;
  developer_salary = salary.value;
  developer_github = github.value;
  developer_linkedin = linkedin.value;
  developer_photo = photo.value;
  
  //developer detail function called..
  AddDeveloperDetails(developer_name,developer_email,developer_designation,developer_chips,developer_salary,developer_github,developer_linkedin,developer_photo,id,false);
  M.toast({html: 'Developer Added!'})



  LIST.push({
    name:developer_name,
    email:developer_email,
    designation:developer_designation,
    chips:developer_chips,
    salary:developer_salary,
    github:developer_github,
    linkedin:developer_linkedin,
    photo:developer_photo,
    id:id,
    trash:false
});


//filtered search

//sort button onclick
sort.addEventListener('click',function(){
  var sortObject =  {

  }

  LIST.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    else if(nameA > nameB){
      return 1;
    }
    else{
      return 0;
    }
  
  });
  console.log(LIST);
})


//displaying it for confirmation.....
console.log(id);

//setting each developer value in local storage....
localStorage.setItem('developer' + (id+1) , JSON.stringify(LIST[id]));

//get even after refresh
function allStorage(){
   var archive = [];
   for(var i=0 ; i<localStorage.length ; i++){
    archive[i] = localStorage.getItem(localStorage.key[i]);
    console.log(archive[i]); 
  }
}
allStorage();


//incrementing id value....
id++;

  //clear all values..
  name.value = "";
  email.value = "";
  designation.value = "";
  chips.value = "";
  salary.value = "";
  github.value = "";
  linkedin.value = "";
  photo.value = "";

};

//delete function.....
function removeDev (element) {
  element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove(element.parentNode);
  LIST[element.id].trash = true;
  localStorage.removeItem("developer" + (id));
  if(localStorage.length<1){
    id=0;
  }
  M.toast({html: 'Developer Deleted!'})
}

function editDev(element) {
  element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove(element.parentNode);
  LIST[element.id].trash = true;
  localStorage.removeItem("developer" + (id+1));
  M.toast({html: 'Developer Deleted!'})
}


//on click action.........
addForm.addEventListener('click',function(event){
  const element = event.target;
  elementJob = element.attributes.job.value;
  if(elementJob == "delete"){
      removeDev(element); 
  }
  else if(elementJob == "edit") {
      editDev(element);
  }
});

//clear local storage
clear.onclick = function () {
  M.toast({html: 'All Developers Deleted'})
  document.location.reload();
  localStorage.clear();
  console.log('localstorage cleared');
}
