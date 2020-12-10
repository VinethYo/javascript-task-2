var saveddata = [];
var editIndex;

// var terminalarray = [];
// var addDepotarray = [];
function save() {
    var portName = document.getElementById("portName").value;
    var portCode = document.getElementById("portCode").value;
    var type = document.getElementById("type").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var postalCode = document.getElementById("postalCode").value;
    var portNameinBl = document.getElementById("portNameinBl").value;
    var countryPrefixNumber = document.getElementById("countryPrefixNumber").value;
    var locationPrefixNumber = document.getElementById("locationPrefixNumber").value;
    var terminals = document.getElementById("terminals").value;
    var noOfFreeDays = document.getElementById("noOfFreeDays").value;
    var name = document.getElementById("name").value;
    var freee = document.getElementById("freee").value;
    var phone = document.getElementById("phoneNum").value;
    var email = document.getElementById("email").value;
    var addres = document.getElementById("addres").value;


    // save function

    if (portName < 1) {
        document.getElementById("portNamealert").innerHTML = "required";
    } else {
        document.getElementById("portNamealert").innerHTML = "";
    };
    if (portCode == "") {
        document.getElementById("portCodealert").innerHTML = "required";
    } else {
        document.getElementById("portCodealert").innerHTML = "";
    };
    if (type == "") {
        document.getElementById("typealert").innerHTML = "required";
    } else {
        document.getElementById("typealert").innerHTML = "";
    };
    if (address == "") {
        document.getElementById("addressalert").innerHTML = "required";
    } else {
        document.getElementById("addressalert").innerHTML = "";
    };
    if (country == "") {
        document.getElementById("countryalert").innerHTML = "required";
    } else {
        document.getElementById("countryalert").innerHTML = "";
    };
    if (postalCode == "") {
        document.getElementById("postalCodealert").innerHTML = "required";
    } else {
        document.getElementById("postalCodealert").innerHTML = "";
    };
    if (portNameinBl == "") {
        document.getElementById("portNameinBlalert").innerHTML = "required";
    } else {
        document.getElementById("portNameinBlalert").innerHTML = "";
    };
    if (countryPrefixNumber == "") {
        document.getElementById("countryPrefixNumberalert").innerHTML = "required";
    } else {
        document.getElementById("countryPrefixNumberalert").innerHTML = "";
    };
    if (locationPrefixNumber == "") {
        document.getElementById("locationPrefixNumber").innerHTML = "required";
    } else {
        document.getElementById("locationPrefixNumber").innerHTML = "";
    };
    if (terminals == "") {
        document.getElementById("terminalsalert").innerHTML = "required";
    } else {
        document.getElementById("terminalsalert").innerHTML = "";
    };
    if (noOfFreeDays == "") {
        document.getElementById("noOfFreeDaysalert").innerHTML = "required";
    } else {
        document.getElementById("noOfFreeDaysalert").innerHTML = "";
    };
    if (name == "") {
        document.getElementById("namealert").innerHTML = "required";
    } else {
        document.getElementById("namealert").innerHTML = "";
    };
    if (freee == "") {
        document.getElementById("noOfFreeDayalert").innerHTML = "required";
    } else {
        document.getElementById("noOfFreeDayalert").innerHTML = "";
    };
    if (phone == "") {
        document.getElementById("phonealert").innerHTML = "required";
    } else {
        document.getElementById("phonealert").innerHTML = "";
    };
    if (email == "") {
        document.getElementById("emailalert").innerHTML = "required";
    } else {
        document.getElementById("emailalert").innerHTML = "";
    };
    if (addres == "") {
        document.getElementById("addresalert").innerHTML = "required";
        return false;
    } else {
        document.getElementById("addresalert").innerHTML = "";
    };

    console.log(editIndex);
    // if (editIndex != undefined) {
        saveddata.splice(editIndex, 1);
    // }


    var obj = {
        portName: portName,
        portCode: portCode,
        type: type,
        address: address,
        country: country,
        postalCode: postalCode,
        portNameinBl: portNameinBl,
        countryPrefixNumber: countryPrefixNumber,
        locationPrefixNumber: locationPrefixNumber,
        terminal: {
            terminals: terminals,
            noOfFreeDays: noOfFreeDays,
        },
        depot: {
            name: name,
            freee: freee,
            phone: phone,
            email: email,
            addres: addres
        }
    };

    // object pushed in array

    saveddata.push(obj);
    console.log(saveddata);

    document.getElementById("portName").value = '';
    document.getElementById("portCode").value = '';
    document.getElementById("type").value = '';
    document.getElementById("address").value = '';
    document.getElementById("country").value = '';
    document.getElementById("postalCode").value = '';
    document.getElementById("portNameinBl").value = '';
    document.getElementById("countryPrefixNumber").value = '';
    document.getElementById("locationPrefixNumber").value = '';
    document.getElementById("terminals").value = '';
    document.getElementById("noOfFreeDays").value = '';
    document.getElementById("name").value = '';
    document.getElementById("freee").value = '';
    document.getElementById("phoneNum").value = '';
    document.getElementById("email").value = '';
    document.getElementById("addres").value = '';
    createTable();
}

// contruct table function

function createTable() {
    var html = "";
    editIndex = undefined;

    for (var i = 0; i < saveddata.length; i++) {
        html += "<tr>";
        html += "<td>" + saveddata[i].portName + "</td>";
        html += "<td>" + saveddata[i].portCode + "</td>";
        html += "<td>" + saveddata[i].country + "</td>";
        
        html += "<td>" + saveddata[i].depot.phone + "</td>";

        html += '<td><button class="btn btn-danger" onclick="erase(' + i + ')">Delete</button><button class="btn btn-success ml-3" onclick="Edit(' + i + ')">Edit</button></td>';
        html += "</tr>";

    }
    document.getElementById("bodyId").innerHTML = html;
}


function erase(del) {
    // alert();
    console.log(del);
    saveddata.splice(del, 1);
    createTable();
}
function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(saveddata);
    console.log(saveddata[edi]);
    // document.getElementById("portName").value = saveddata[edi].portName;
    // document.getElementById("portCode").value = saveddata[edi].portCode;
    // document.getElementById("country").value = saveddata[edi].country;
    // document.getElementById("phone").value = saveddata[edi].phone;

    document.getElementById("portName").value = saveddata[edi].portName;
    document.getElementById("portCode").value = saveddata[edi].portCode;
    document.getElementById("type").value = saveddata[edi].type;
    document.getElementById("address").value = saveddata[edi].address;
    document.getElementById("country").value = saveddata[edi].country;
    document.getElementById("postalCode").value = saveddata[edi].postalCode;
    document.getElementById("portNameinBl").value = saveddata[edi].portNameinBl;
    document.getElementById("countryPrefixNumber").value = saveddata[edi].countryPrefixNumber;
    document.getElementById("locationPrefixNumber").value = saveddata[edi].locationPrefixNumber;
    document.getElementById("terminals").value = saveddata[edi].terminal.terminals;
    document.getElementById("noOfFreeDays").value = saveddata[edi].terminal.noOfFreeDays;
    document.getElementById("name").value = saveddata[edi].depot.name;
    document.getElementById("freee").value = saveddata[edi].depot.freee;
    document.getElementById("phoneNum").value = saveddata[edi].depot.phone;
    document.getElementById("email").value = saveddata[edi].depot.email;
    document.getElementById("addres").value = saveddata[edi].depot.addres;
};

