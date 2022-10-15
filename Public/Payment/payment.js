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
    
    function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
    }



			function redirect(){
            window.location="./payment/payment.html"
          }
        
