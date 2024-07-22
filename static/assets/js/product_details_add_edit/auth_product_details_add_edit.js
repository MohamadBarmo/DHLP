var error

function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function translate(English, arabic) {
  if (LANGUAGE_CODE_javascript == 'ar') {
    return arabic;
  } else {
    return English;
  }
}

function formValidation() {
  clearBox('messages');

  //var uid = document.registration.userid;
  var product = document.form1.inputproduct;
  var service = document.form1.inputservice;
  var offername = document.form1.inputoffname;
  var offerprice = document.form1.inputoffprice;
  var offercurrncy = document.form1.currnecyselect2;
  var offerdesc = document.form1.textareacounter;
  var offermaincat = document.form1.accountSelectcategoryMain;
  var offersubcat = document.form1.accountSelectcategory;
  var offercountry = document.form1.accountSelectcountry;
  var offercity = document.form1.accountSelectcity;
  var offimageinput1 = document.form1.inputfile1;
  var offimage1 = document.form1.blah1;

  // var uemail = document.registration.email;


  // var uadd = document.registration.address;
  // var ucountry = document.registration.country;
  // var uzip = document.registration.zip;

  // var umsex = document.registration.msex;
  // var ufsex = document.registration.fsex;
  //if (userid_validation(uid, 5, 12)) {
  clearBox('divscripterrors');
  error = document.createElement("ul")

  booluservpro = (validprodserv(product, service))
  booloffername = (checkoffername(offername, 'Offer name is required.', 'اسم العرض مطلوب'))
  boolofferprice = (checkofferprice(offerprice))
  boolofferdesc = (checkoffername(offerdesc, 'Offer desc is required.', 'وصف العرض مطلوب'))
  booloffercurrency = (currencyselect(offercurrncy, 'currency is required.', 'أختر العملة'))
  booloffermaincat = (currencyselect(offermaincat, 'main category is required.', 'أختر التصنيف الرئيسي'))
  booloffersubcat = (currencyselect(offersubcat, 'sub category is required.', 'أختر التصنيف الفرعي'))
  booloffercountry = (currencyselect(offercountry, 'country is required.', 'أختر البلد'))
  booloffercity = (currencyselect(offercity, 'city is required.', 'أختر المدينة'))
  boolofferinimage1 = (checkofferimage(offimageinput1, offimage1, 'The first image is required', 'الصورة الاولى مطلوبة'))





  if (!( booluservpro &&  boolofferprice && boolofferdesc && booloffercurrency && boolofferinimage1)) {
    error.style = 'color: red;'
    divscripterrors.appendChild(error);
    alert(translate('There are errors in the entry!', 'يوجد اخطاء في الادخال!'));
    return false
  }

  return true


}

function validprodserv(umpro, userv) {
  x = 0;

  if (umpro.checked) {
    x++;
  }
  if (userv.checked) {
    x++;
  }
  if (x == 0) {
    document.getElementById('idulproductservice').classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('must choose service ot product.', 'يجب اختيار منتج أو خدمة.')));
    error.appendChild(newNode);
    return false;
  } else {
    document.getElementById('idulproductservice').classList.remove("redborder");
    return true;
  }
}

function checkofferimage(uinput, offimage1, en, ar) {

  var uinput_len = uinput.value.trim().length;
  console.log('uinput_len:', uinput_len)
  console.log(document.getElementById('aorgimg').src)
  if (uinput_len == 0) {
    console.log(offimage1.src)
    console.log(document.getElementById('aorgimg').src)
    if (offimage1.src == document.getElementById('aorgimg').src) {
     
      console.log('uinput_len: in')
      console.log(offimage1.parentElement.parentElement.nodeName)
      offimage1.parentElement.parentElement.classList.remove("border-info");
      offimage1.parentElement.parentElement.classList.add("border-danger");
      console.log(offimage1.parentElement.parentElement)
      var newNode = document.createElement('li');
      newNode.appendChild(document.createTextNode(translate(en, ar)));
      error.appendChild(newNode);

      return false;
    }
    console.log('uinput_len:in2')
    console.log(offimage1.parentElement.parentElement.nodeName)
    offimage1.parentElement.parentElement.classList.remove("border-danger");
    offimage1.parentElement.parentElement.classList.add("border-info");    
    return true
  } else {
    console.log('uinput_len:in2')
    console.log(offimage1.parentElement.parentElement.nodeName)
    offimage1.parentElement.parentElement.classList.remove("border-danger");
    offimage1.parentElement.parentElement.classList.add("border-info");   
    return true;
  }

}

function checkoffername(uname, en, ar) {

  var uname_len = uname.value.trim().length;

  if (uname_len == 0) {

    uname.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate(en, ar)));
    error.appendChild(newNode);

    return false;
  } else {

    uname.classList.remove("redborder");
    return true;
  }

}

function checkofferprice(price) {

  var uprice_len = price.value.trim().length;

  if (uprice_len == 0) {

    price.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('Offer price is required.', 'السعر مطلوب')));
    error.appendChild(newNode);

    return false;
  //} else if (!checknumber(price, price.value.trim())) {
   // var newNode = document.createElement('li');
    //newNode.appendChild(document.createTextNode(translate('Offer price not valid.', 'السعر غير صالح')));
   // error.appendChild(newNode);
   // return false;

  } else {

    price.classList.remove("redborder");
    return true;
  }

}
//^\d{0,8}(\.\d{1,4})?$
function checknumber(priceinput, numbertocheck) {
  var regex = /^\d{0,8}(\.\d{1,4})?$/;
  if (!(new RegExp(regex).test(numbertocheck))) {

    priceinput.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('price must be valid number', 'السعر يجب ان يكون رقم صالح')));
    error.appendChild(newNode);
    return false;
  } else {
    priceinput.classList.remove("redborder");
    return true;
  }

}


function isinputNumber(evnt, inputele) {
  var ch = String.fromCharCode(evnt.which);

  var regex = /^ *\d{1,3}(?:\.\d{3})*(?:,\d{1,2})?$/;


  if (ch == '.' || ch == ',') {

  } else if (!(new RegExp(regex).test(ch))) {

    evnt.preventDefault();
  }
}


function currencyselect(ucurrency, en, ar) {
  if (ucurrency.value == "Default") {
    ucurrency.classList.add("redborder");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate(en, ar)));
    error.appendChild(newNode);
    return false;
  } else {
    ucurrency.classList.remove("redborder");
    return true;
  }
}


function clearInputFile(f) {
  if (f.value) {
    try {
      f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
    } catch (err) {}
    if (f.value) { //for IE5 ~ IE10
      var form = document.createElement('form'),
        ref = f.nextSibling;
      form.appendChild(f);
      form.reset();
      ref.parentNode.insertBefore(f, ref);
    }
  }
}


function clearimage(inputid, imageid) {
  const inputelement = document.getElementById(inputid)
  const imageelement = document.getElementById(imageid)
  try {
    inputelement.value = ''; //for IE11, latest Chrome/Firefox/Opera...
    imageelement.src = document.getElementById('aorgimg').src;
  } catch (err) {}
  if (inputelement.value) { //for IE5 ~ IE10
    var form = document.createElement('form'),
      ref = inputelement.nextSibling;
    form.appendChild(inputelement);
    form.reset();
    ref.parentNode.insertBefore(inputelement, ref);
  }
}

function readURLall(input, imageid) {
  if (input.files && input.files[0]) {
    var file1 = input.files[0];
    console.log(file1.size);
    var reader = new FileReader();
    if (file1.size < 800 * 1024) {
      reader.onload = function (e) {
        document.getElementById(imageid).src = e.target.result
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      Errormessage = errormeassge + " " + (file1.size /
        1024).toFixed(0) + " " + sizeinkilo;
      alert(Errormessage);
      input.value = '';
    }
  } else {
    document.getElementById(imageid).src = document.getElementById('aorgimg').innerHTML;
  }
}

window.onload=function() {
  if(document.form1.accountSelectcategoryMain.options[document.form1.accountSelectcategoryMain.selectedIndex].value!='Default')
  refreshsubcat(document.form1.accountSelectcountry)
};

function refreshsubcat(maincatselect) {
  console.log(2);
  var optionSelected = maincatselect.options[maincatselect.selectedIndex];
    
  console.log(optionSelected.value);
  const valueSelected = optionSelected
      .value; // get the selected subject ID from the HTML dropdown list 
  var categorymain_name = optionSelected.text;
  console.log(optionSelected.text);
  $.ajax({ // initialize an AJAX request
      type: "GET",
      url: '/getdetails/1',
      data: {
          'cnt': categorymain_name,
          'couid': valueSelected,
          'type': 'category',
          'csrfmiddlewaretoken': $(
                  'input[name=csrfmiddlewaretoken]')
              .val(),
      },
      success: function (
          result
      ) { // `data` is from `get_topics_ajax` view function
          console.log(result);
          $("#accountSelectcategory option").remove();
          if (LANGUAGE_CODE_javascript === "ar") {
              for (var i = result.length - 1; i >=
                  0; i--) {
                  $("#accountSelectcategory").append(
                      '<option value="' + result[
                          i]
                      .id +
                      '"{% if 5 == 5 %} selected="selected" {% endif %}> ' +
                      result[i].name_ar +
                      '</option>');
              };
          } else {
              for (var i = result.length - 1; i >=
                  0; i--) {
                  $("#accountSelectcategory").append(
                      '<option value="' + result[
                          i]
                      .id +
                      '"{% if 5 == 5 %} selected="selected" {% endif %}> ' +
                      result[i].name + '</option>'
                  );
              };
          }
      }
  });
};
window.onload=function() {
  if(document.form1.accountSelectcountry.options[document.form1.accountSelectcountry.selectedIndex].value!='Default')
  refershcities(document.form1.accountSelectcountry)
};

function refershcities(countryselect) {
  console.log(2);
  var optionSelected = countryselect.options[countryselect.selectedIndex];
  console.log(optionSelected.value);
  const valueSelected = optionSelected
      .value; // get the selected subject ID from the HTML dropdown list 
  var country_name = optionSelected.text;
  console.log(optionSelected.text);
  $.ajax({ // initialize an AJAX request
      type: "GET",
      url: '/getdetails/1',
      data: {
          'cnt': country_name,
          'couid': valueSelected,
          'type': 'city',
          'csrfmiddlewaretoken': $(
                  'input[name=csrfmiddlewaretoken]')
              .val(),
      },
      success: function (
          result
      ) { // `data` is from `get_topics_ajax` view function
          console.log(result);
          $("#accountSelectcity option").remove();
          if (LANGUAGE_CODE_javascript === "ar") {
              for (var i = result.length - 1; i >=
                  0; i--) {
                  $("#accountSelectcity").append(
                      '<option value="' + result[
                          i]
                      .id +
                      '"{% if 5 == 5 %} selected="selected" {% endif %}> ' +
                      result[i].name_ar +
                      '</option>');
              };
          } else {

              for (var i = result.length - 1; i >=
                  0; i--) {
                  $("#accountSelectcity").append(
                      '<option value="' + result[
                          i]
                      .id +
                      '"{% if 5 == 5 %} selected="selected" {% endif %}> ' +
                      result[i].name + '</option>'
                  );
              };
          }
      }
  });
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validcheckbox(uagree) {
  console.log("checkbox");
  if (!uagree.checked) {
    uagree.parentElement.classList.add("redborder");
    //error.innerHTML += ' must agree terms and conditions.  ';
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('must agree terms and conditions.', 'يجب الموافقة على الاتفاقية.')));
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
    newNode.appendChild(document.createTextNode(translate('password is required.', 'كلمة السر مطلوبة')));
    error.appendChild(newNode);
    //error.innerHTML += ' password must be between '+my+' and '+mx+'. ';
    passid.classList.add("redborder");
    return false;
  } else if (passid_len > my) {
    //alert("Password should not be empty / length be between " + mx + " to " + my);
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password must be longer than ' + mx + '.', 'كلمة السر يجب أن تكون اكثر من' + mx + 'محارف')));
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
    newNode.appendChild(document.createTextNode(translate('password confirmation is required.', 'تأكيد كلمة السر مطلوب')));
    error.appendChild(newNode);
    //error.innerHTML += ' password must be between '+my+' and '+mx+'. ';
    passidconf.classList.add("redborder");
    return false;
  } else if (passid.value == passidconf.value) {
    console.log("passidconf_check2");
    passidconf.classList.remove("redborder");
    return true;
  } else {
    console.log("passidconf_check3");
    var newNode = document.createElement('li');
    newNode.appendChild(document.createTextNode(translate('password Confirmation must matching password.', 'تأكيد كلمة السر غير مطابق لكلمة السر')));
    error.appendChild(newNode);
    passidconf.classList.add("redborder");
    console.log("passidconf_check4");
    return false;
  }
}