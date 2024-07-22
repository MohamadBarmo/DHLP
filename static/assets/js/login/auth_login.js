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
  var uname = document.loginform.usernamelogin;
  var passid = document.loginform.password;

  clearBox('divscripterrors');
  error = document.createElement("ul")

  booluname = (allLetter(uname))
  boolpassid_validation = (passid_validation(passid, 7, 12))

  if (!(booluname && boolpassid_validation )) {
    error.style = 'color: red;'
    divscripterrors.appendChild(error);

    return false
  }

  return true


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