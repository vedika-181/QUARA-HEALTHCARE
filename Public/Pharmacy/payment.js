var citiesByState = {
    Andhra_Pradesh:["Hyderabad","Visakhapatnam","Warangal","Guntur","Nellore","Rajahmundry","Tirupati","Nizamabad"],
    Arunachal_Pradesh:["Tawang","Lower Dibang Valley","East Kameng","West Siang","West Kameng","Dibang Valley","Changlang"],
    Assam:["Guwahati","Silchar","Jorhat","Dibrugarh","Tezpur","Nagaon"],
    Bihar:["Patna","Gaya","Darbhanga","Chapra","Nalanda","Muzaffarpur","Bhagalpur","Kathiar"],
    Chhattisgarh:["Bilha","Takhatpur","Simga","Akaltara","Raipur"],
    Goa:["Panaji","Margao","Mapusa","Ponda","Bicholim"],
    Gujarat:["Ahemdabad","Rajkot","Vadodara","Gandhinagar","Surat"],
    Haryana:["Ambala","Rewari","Thanesar","Gurgaon","Jhajjar"],
    Jammu_and_Kashmir:["Srinagar","Baramulla","Kathua"],
    Jharkhand:["Ranchi","Jamshedpur","Bokaro","Dhanbad"],
    Karnataka:["Bengaluru","Mangalore","Belagavi","Udupi","Mysuru","Dharwad"],
    Maharashtra:["Mumbai","Pune","Aurangabad","Nashik","Nagpur","Kolhapur"],
    Meghalaya:["Shillong","Mairang","Tura","Jowai"],
    Odisha:["Bhubaneshwar","Puri","Cuttack","Sambalpur"],
    Punjab:["Ludhiana","Jalandhar","Amritsar","Patiala","Bathinda"],
    Rajasthan:["Jaipur","Jodhpur","Udaipur","Ajmer","Kota","Jaisalmer"],
    TamilNadu:["Chennai","Coimbatore","Salem","Mudarai","Vellore"],
    UttarPradesh:["Lucknow","Agra","Kanpur","Ghaziabad","Varanasi"],
    Uttarakhand:["Mussoorie","Haridwar","Nainital","Dehradun"],
    West_Bengal:["Kolkata","Asansol","Durgapur","Siliguri","Darjeeling","Howrah"]
    }
    function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    function displaySelected() { var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
    alert(country+"\n"+city);
    }
    function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
    }



			function redirect(){
            window.location="./payment/payment.html"
          }
        
          function sendData(){
            

            fetch('http://localhost:3000/payment', {
              method: 'POST',
              body: JSON.stringify({
                  Fullname: document.querySelector('Fullname').value,
                  Address: document.querySelector('Address').value,
                  Zip: document.querySelector('Zip').value,
                  Card_holders_name: document.querySelector('Card_holders_name').value,
                  Card_number: document.querySelector('Card_number').value,
                  Expiry_month: document.querySelector('Expiry_month').value,
				  Expiry_year: document.querySelector('Expiry_year').value,
				  CVC_number:document.querySelector('CVC_number').value,
              }),
              headers: {
                'Content-type': 'application/json'
              }
            }).then((response) => {
              window.location.href = '/payment/payment.html'
            }).catch((e) => {
              console.log(e)
            })
            redirect();
          }
