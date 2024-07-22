// submitButton = document.getElementById("registerFormbtn")
// usernameinput = document.getElementById('inputNamebb')
// inputName = document.getElementById('inputName')

// emailinput = document.getElementById('inputEmailbb')
// inputEmail = document.getElementById('inputEmail')

// passinput = document.getElementById('inputPasswordbb')
// inputPassword = document.getElementById('inputPassword')

// confpassinput = document.getElementById('inputConfPasswordbb')
// inputConfPassword = document.getElementById('inputConfPassword')

// checkboxinput = document.getElementById('checkboxid')

// divscripterrors = document.getElementById('divscripterrors')


// function errorMessage(message) {
//   var error = document.createElement("span")
//   error.style = 'color: red;'
//   error.textContent = message
//   error.style.color = "red"

// }

/*submitButton.addEventListener('click', e => {
  console.log("clicked");
  if (!checkallreq()) {
    e.preventDefault();
    console.log("preventDefault");
  }
});*/

// function checkallreq() {
//   clearBox('divscripterrors');
//   console.log("checkallreq");
//   boolcheck = true;
//   boolcheck = checkrequired(usernameinput, inputName) && boolcheck;
//   boolcheck = checkrequired(emailinput, inputEmail) && boolcheck;
//   boolcheck = checkrequired(passinput, inputPassword) && boolcheck;
//   boolcheck = checkrequired(confpassinput, inputConfPassword) && boolcheck;
//   boolcheck = checkcheckbox(checkboxinput) && boolcheck;
//   console.log("boolcheck", boolcheck);
//   return boolcheck;
// }


// function checkrequired(input, inputtext) {
//   console.log(input);
//   console.log("checkrequired");
//   let input_value = input.value.trim();
//   var error = document.createElement("span")
//   error.id = input.id;
//   console.log(input_value);
//   if (!input.value && input_value.length == 0) {

//     error.style = 'color: red;'
//     error.textContent += inputtext.textContent;
//     // error.style.color = "red"
//     divscripterrors.appendChild(error);
//     console.log("in if");
//     input.classList.add("redborder");
//     return false;
//   } else {
//     input.classList.remove("redborder");
//     return true;
//   }
//   console.log("out if");
// }





// function checkLength(input, min, max) {
//   let input_value = input.value.trim();
//   //var matches= input_value.match(/([\s]{3,})\1*/g);
//   var matches = input_value.match(/[\s]{3,}/g);
//   //THIS PATTERN WILL MATCH MORE THAN 3 WHITE SPACES

//   if (input_value.length < min) {
//     // MINIMUM LENGTH ERROR MESSAGE
//     showError(
//       input,
//       `${getFieldName(input)} must be at least ${min} characters`
//     );
//   } else if (input_value.length > max) {
//     // MAXIMUM LENGTH ERROR MESSAGE
//     showError(
//       input,
//       `${getFieldName(input)} must be less than ${max} characters`
//     );
//   } else if (matches != null) {
//     console.log(`'${input_value}' WITH MORE THAN 2 WHITE SPACES`)
//   } else {
//     console.log(`'${input_value}' WITH LESS THAN 3 WHITE SPACES`);
//   }
// };

// function showDivcompanyuser(divId, element) {
//   console.log(divId);
//   console.log(element)
//   document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';

// }

// function resetDivcompanyuser(divId, element) {
//   console.log('resetDivcompanyuser');
//   console.log(element)
//   document.getElementById(divId).style.display = 'none';
//   element.value = 0;

// }


//--------------------------------------------------------------
var error

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function translate(English,arabic)
{
if(LANGUAGE_CODE_javascript=='ar')
{
  return arabic;
}else 
{
  return English;
}
}

function formValidation() {
  clearBox('messages');
  console.log(LANGUAGE_CODE_javascript);
  console.log('formValidation');
  //var uid = document.registration.userid;
  var uname = document.registration.usernameregister;
  var uemail = document.registration.email;
  var passid = document.registration.password;
  var confpassid = document.registration.passwordconfirmation
  var checkboxid = document.registration.checkboxid;
  var customer_type = document.registration.customer_type;

  // var uadd = document.registration.address;
  // var ucountry = document.registration.country;
  // var uzip = document.registration.zip;

  // var umsex = document.registration.msex;
  // var ufsex = document.registration.fsex;
  //if (userid_validation(uid, 5, 12)) {
  clearBox('divscripterrors');
  error = document.createElement("ul")


  booluname = (allLetter(uname))
  boolValidateEmail = (ValidateEmail(uemail))
  boolpassid_validation = (passid_validation(passid, 7, 12))
  boolpassidconf = passidconf_check(confpassid, passid)
  boolcountryselect = (countryselect(customer_type))
  boolvalidcheckbox = validcheckbox(checkboxid)
  

  if (!(booluname && boolValidateEmail && boolpassid_validation && boolpassidconf && boolcountryselect && boolvalidcheckbox)) {
    error.style = 'color: red;'
    divscripterrors.appendChild(error);

    return false
  }

  return true


}


function validcheckbox(uagree) {
  console.log("checkbox");
  if (!uagree.checked) {
    uagree.parentElement.classList.add("redborder");
    //error.innerHTML += ' must agree terms and conditions.  ';
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('must agree terms and conditions.','يجب الموافقة على الاتفاقية.')));
    error.appendChild(newNode);
    return false;
  } else {
    uagree.parentElement.classList.remove("redborder");
    return true;
  }
}

function passid_validation(passid, mx, my) {
  var passid_len = passid.value.trim().length;
  if (passid_len == 0) {
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password is required.','كلمة السر مطلوبة')));
    error.appendChild(newNode);
    //error.innerHTML += ' password must be between '+my+' and '+mx+'. ';
    passid.classList.add("redborder");
    return false;
  } else if ( passid_len < mx) {
    //alert("Password should not be empty / length be between " + mx + " to " + my);
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password must be longer than ' + mx + '.', 'كلمة السر يجب أن تكون اكثر من'+mx+'محارف')));
    error.appendChild(newNode);
    //error.innerHTML += ' password must be between '+my+' and '+mx+'. ';
    passid.classList.add("redborder");
    return false;
  }
  passid.classList.remove("redborder");
  return true;
}

function passidconf_check(passidconf, passid) {
  console.log("passidconf_check1");
  if (passidconf.value.length == 0) {
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password confirmation is required.','تأكيد كلمة السر مطلوب')));
    error.appendChild(newNode);
    //error.innerHTML += ' password must be between '+my+' and '+mx+'. ';
    passidconf.classList.add("redborder");
    return false;
  }
  else if (passid.value == passidconf.value) 
  {
    console.log("passidconf_check2");
    passidconf.classList.remove("redborder");
    return true;
  } else {
    console.log("passidconf_check3");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password Confirmation must matching password.','تأكيد كلمة السر غير مطابق لكلمة السر')));
    error.appendChild(newNode);
    passidconf.classList.add("redborder");
    console.log("passidconf_check4");
    return false;
  }
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  var uname_len = uname.value.trim().length;
  if (uname_len == 0) {
    uname.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('name is required.','اسم المستخدم مطلوب')));
    error.appendChild(newNode);
    return false;
  }
  // }
  //else if (uname.value.match(letters)) {
  //  uname.classList.remove("redborder");
  //  return true;
  //} else {
  //alert('Username must have alphabet characters only');
  // uname.classList.add("redborder");
  // var newNode = document.createElement('li');
  // newNode.appendChild(document.createTextNode('name must be chars.'));
  // error.appendChild( newNode );
  // error.textContent += ' name is required. ';
  // uname.focus();
  // return false;
  // }
  uname.classList.remove("redborder");
  return true;
}

function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.trim().match(letters)) {
    uadd.classList.remove("redborder");
    return true;
  } else {
    //alert('User address must have alphanumeric characters only');
    uadd.classList.add("redborder");

    return false;
  }
}


function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    //alert('Select your country from the list');
    ucountry.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('account type is required.','أختر نوع الحساب')));
    error.appendChild(newNode);
    //error.textContent += ' account type is required. ';
    return false;
  } else {
    ucountry.classList.remove("redborder");
    return true;
  }
}


function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.trim().match(numbers)) {
    uzip.classList.remove("redborder");
    return true;
  } else {
    // alert('ZIP code must have numeric characters only');
    uzip.classList.add("redborder");
    uzip.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var uemail_len = uemail.value.trim().length;
  if (uemail_len == 0) {
    uemail.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('email is required.','الايميل مطلوب')));
    error.appendChild(newNode);
    return false;
  }
  // }
  else if (uemail.value.match(mailformat)) {
    uemail.classList.remove("redborder");
    return true;
  } else {
    //alert("You have entered an invalid email address!");
    uemail.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('email must be valid.','الايميل غير صالح')));
    error.appendChild(newNode);
    //error.textContent += ' email must be valid. ';

    return false;
  }
}


function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    //alert('Select Male/Female');
    umsex.classList.add("redborder");
    ufsex.classList.add("redborder");
    umsex.focus();
    return false;
  } else {
    //alert('Form Successfully Submitted');
    umsex.classList.remove("redborder");
    ufsex.classList.remove("redborder");
    window.location.reload()
    return true;
  }
}

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.trim().length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert( translate("User Id should not be empty / length be between " + mx + " to " + my + ".",''));
    uid.focus();
    return false;
  }
  return true;
}


/*
function formValidation() {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
          if (countryselect(ucountry)) {
            if (allnumeric(uzip)) {
              if (ValidateEmail(uemail)) {
                if (validsex(umsex, ufsex)) {}
              }
            }
          }
        }
      }
    }
  }
  return false;

}

function userid_validation(uid, mx, my) {
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert("User Id should not be empty / length be between " + mx + " to " + my);
    uid.focus();
    return false;
  }
  return true;
}

function passid_validation(passid, mx, my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between " + mx + " to " + my);
    passid.focus();
    return false;
  }
  return true;
}

function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}

function alphanumeric(uadd) {
  var letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    alert('User address must have alphanumeric characters only');
    uadd.focus();
    return false;
  }
}

function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    alert('Select your country from the list');
    ucountry.focus();
    return false;
  } else {
    return true;
  }
}

function allnumeric(uzip) {
  var numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    alert('Select Male/Female');
    umsex.focus();
    return false;
  } else {
    alert('Form Succesfully Submitted');
    window.location.reload()
    return true;
  }
}

*/