window.onload = function () {
    var info = {
        "owner": "Vuhkse05247   ", //username cua chu hang
        "ownerPhone": "0969622396",
        "reciever": "Datpmse05386",
        "recieverPhone": "09856352132",
        "address": "Km29 Đại Lộ Thăng Long",
        "date": "22/05/2018",
        "ordersname": "Laptop",
        "desc": "Đây là một cái Descripton"
    };
    var fromLocation = info.ordersname;
    var toLocation = 'Address: ' + info.address;
    var human2 = info.owner;
    var human = 'Owner: ' + info.owner
            + '<br></br>' + 'Owner Phone: ' + info.ownerPhone
            + '<br></br>' + 'Receiver Name: ' + info.reciever
            + '<br></br>' + 'Receiver Phone: ' + info.recieverPhone
            + '<br></br>' + 'Expired Date: ' + info.date;
            +'<br></br>' + 'Description: ' + info.desc;
    document.getElementById('fromer').innerHTML = fromLocation;
    document.getElementById('to').innerHTML = toLocation;
    document.getElementById('human').innerHTML = human;
    document.getElementById('hello').innerHTML = human2;
};
