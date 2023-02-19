<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

    <title>Users</title>
</head>
<body  style="margin-left:400px;margin-top:100px;">
<div class="container col-lg-12" >

     <div class="col-lg-12">

 <form class="form-horizontal" id="">

  <div id ="responseDiv"></div>

  			<h4>ADD USER</h4>
            <div class="form-group form-group-lg">
                <label class="col-sm-4 control-label">Name :</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="name" name="name"/>
                </div>
            </div>

            <div class="form-group form-group-lg">
                <label class="col-sm-4 control-label">Email :</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="email" name="email"/>
                </div>
            </div>

            <div class="form-group form-group-lg">
                <label class="col-sm-4 control-label">Address :</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="address" name="address"/>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-12">
                    <button type="button" id="bth-search"
                            class="btn btn-primary btn-lg" onclick="saveUser()">Submit
                    </button>
                </div>
            </div>
        </form>

</div>
<br>
      			<h4>USER LIST</h4>

        <div class=" col-lg-9">

            <div class="form-group form-group-lg">
     <table class="table table-striped" id = "user-table">
    <thead>
      <tr>
        <th>Sr No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
         <th>Action</th>

      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>
    </div>

          </div>


    </div>
<script src="${pageContext.request.contextPath}/js/user.js"></script>

</body>

</html>