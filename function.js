function sigin() {
  if (
    document.getElementById("uname").value === "Gokul" &&
    document.getElementById("pwd").value === "12345"
  ) {
    return true;
  } else {
    alert("InValid Username and Password");
    return false;
  }
}
function sigup() {
  return true;
}
$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();
    var email = $("#emails").val();
    var cemail = $("#cemails").val();
    var Password = $("#passwords").val();
    var cPassword = $("#cpasswords").val();
    var fname = $("#fnames").val();
    var lname = $("#lnames").val();
    var uname = $("#unames").val();
    var phno = $("#pnos").val();
    var dob = $("#dobs").val();
    // console.log(date);
    var isChecked = $("#tac").is(":checked");
    var final = [];
    $(".error").remove();
    if (fname.length < 1) {
      $("#fname").after('<div class="error">*Enter the Firstname</div>');
    } else {
      final.push("1");
    }
    if (phno.length < 1) {
      $("#pno").after('<div class="error">*Enter the Valid Phone Number</div>');
    } else {
      if (phno.length < 10 || phno.length > 10) {
        $("#pno").after(
          '<div class="error">*Enter the Valid Phone Number length 10</div>'
        );
      }
      if (phno.length == 10) {
        final.push("2");
      }
    }
    if (uname.length < 1) {
      $("#uname").after('<div class="error">*Enter the Username</div>');
    } else {
      final.push("3");
    }
    if (lname.length < 1) {
      $("#lname").after('<div class="error">*Enter the Lastname</div>');
    } else {
      final.push("4");
    }
    if (Password.length < 1) {
      $("#password").after('<div class="error">*Enter the Password</div>');
    }
    if (cPassword !== Password) {
      $("#cpassword").after(
        '<div class="error">*Enter an correct password</div>'
      );
    } else {
      final.push("5");
    }
    var validEmail = "";
    if (email.length < 1) {
      $("#email").after('<div class="error">*This field is required</div>');
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      validEmail = regEx.test(email);
      if (!validEmail) {
        $("#email").after('<div class="error">*Enter a valid email</div>');
      } else {
        final.push("6");
      }
    }
    console.log(validEmail, email, cemail);
    if (cemail != email) {
      $("#cemail").after('<div class="error">*Enter Correct Email</div>');
    } else {
      final.push("7");
    }
    if (isChecked === false) {
      $("#tacs").after('<div class="error">*Accept Terms And Condition</div>');
    } else {
      final.push("8");
    }
    if ($('input[name="gender"]:checked')) {
      if ($('input[name="gender"]:checked').val()) {
      } else {
        $("#gender").after(
          '<span class="error" style="color:red">*Enter your Gender</span>'
        );
      }
    }
    if (dob == "") {
      $("#dob").after('<div class="error">*Enter a Date</div>');
    } else {
      dob = new Date(dob);
      dob = dob.toISOString().split("T");
      let date = new Date();
      date = date.toISOString().split("T");
      if (dob[0] >= date[0]) {
        $("#dob").after('<div class="error">*Enter the valid date</div>');
      }
    }
    if (final.length == 8) {
      $(location).attr("href", "Account.html");
    }
  });
});
