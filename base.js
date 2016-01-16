/**
* start with a comment block
*/

/**
* some basic helper functions
*/
function prettyPrint()
{
 objData = $('#jsonString').val();
 objData = jQuery.parseJSON(objData);
 objJSON = JSON.stringify(objData, null, 2);
 $('#jsonString').val(objJSON);  //text(),html(),val()
}

function pageSingle(id){
 if (document.getElementById(id)){
  (document.getElementById(id).style.display == 'none')? display = 'block': display = 'none' ;
  document.getElementById(id).style.display = display;
 }
}


/**
* the core javascript service object
*/
var BW = BW || {};


BW = {
 API_PATH: '/api/',
 request: function(callback) {
  console.log('Do Request');
 },
};

/*
* Here's the call you'd need to get data for this page
* for a regular user
  var request = {
   method: '\\SERVICE\\CRUD\\CRUD.retrieve',
   params: {
    DSN: 'BLACKWATCH',
    table: 'client',
    pk_field: 'client_pk',
    pk: 5
   },
   id: SESSIONID,
  };
  
*/

BW.templater = {}
