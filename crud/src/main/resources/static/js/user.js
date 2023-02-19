function saveUser(){

	var name = $('#name').val();
	var email = $('#email').val();
	var address = $('#address').val();

	   $.ajax({
		 	 type: "POST",
		     url : "/saveUser",
		     dataType: "json",
		     data:{name:name,email:email, address : address},
		     success : function(response) {
		    console.log(response);

		    var finalResponse = JSON.stringify(response);

		    $("#responseDiv").html("<b>Response is : " +finalResponse+"</b>");

            fetchUser();
		     },
		     error: function (response){

			 		console.log(response);
		      }
	   });
}


function fetchUser(){

	var tableData = "";
	 $.ajax({
	 	 type: "GET",
	     url : "/users",
	     success : function(response) {
	    console.log(response);

	    response.forEach(function(item){
	    	tableData += '<tr>' +
      	  		'<td id = "Sr.No'+item.id+'">' + item.id + '</td>' +
      	  		'<td id = "Name'+ item.id +'">' + item.name + '</td>' +
      	  		'<td id = "Email'+ item.id +'">' + item.email+ '</td>' +
      	  		'<td id = "Address'+ item.id +'">' + item.address + '</td>' +
      	  	    '<td>' +
      	  	    '<button type = "button" id = "editButton'+item.id+'" class = "btn btn-success btn-md editButton" onclick = "editUser('+item.id+')">Edit</button>&nbsp;'+
       	  	   '<button type = "button" id = "updateButton'+item.id+'" style = "display:none;" class = "btn btn-success btn-md updateButton" onclick = "updateUser('+item.id+')">Save</button>'+

      	  	    '<button type = "button" id = "deleteButton "class = "btn btn-danger btn-md" onclick = "deleteUser('+item.id+')">Delete</button>'+
      	  	    '</td>'+

      	  		'</tr>';
        });

      $("#user-table>tbody").html(tableData);
	     },
	     error: function (response){
         console.log(response);
	      }
   });

}

function deleteUser(userId){

		alert(userId);

		 $.ajax({
		 	 type: "GET",
		     url : "/deleteUser",
		     data : {userId:userId},
		     success : function(response) {

		    console.log(response);

		    var finalResponse = JSON.stringify(response);

            $("#responseDiv").html("<b>Response is : " +finalResponse+"</b>");

            fetchUser();

		     },

		    error: function (response){

		 		console.log(response);
	      }

		     });



}


function editUser(userId){

		alert(userId);

		document.getElementById("editButton"+userId).style.display="none";
		 document.getElementById("updateButton"+userId).style.display="block";


		var name=document.getElementById("Name"+userId);  //  td nameid
	     var email=document.getElementById("Email"+userId);  //  td email id
		 var address=document.getElementById("Address"+userId); // td address id

		 console.log(name);
         		    console.log(email);
         		    console.log(address);

		 var name_data=name.innerHTML;
		 var email_data=email.innerHTML;
		 var address_data=address.innerHTML;

		 	console.log(name_data);
		    console.log(email_data);
		    console.log(address_data);


		 name.innerHTML="<input type='text' id='name_text"+userId+"' value='"+name_data+"'>";
		 email.innerHTML="<input type='text' id='email_text"+userId+"' value='"+email_data+"'>";
		 address.innerHTML="<input type='text' id='address_text"+userId+"' value='"+address_data+"'>";



}

function updateUser(userId){

		var name = $('#name_text'+userId).val();
		var email = $('#email_text'+userId).val();
		var address = $('#address_text'+userId).val();


		   $.ajax({
			 	 type: "POST",
			     url : "/updateUser",
			     dataType: "json",
			     data:{userId:userId,name:name,email:email, address : address},
			     success : function(response) {
			    console.log(response);

			    fetchUser();


			    var finalResponse = JSON.stringify(response);

			    $("#responseDiv").html("<b>Your response is : " +finalResponse+"</b>");

				 		console.log(response);

			     },

			     error: function (response){

				 		console.log(response);
			      }

		   });


}



$( document ).ready(function() {

	fetchUser();
});