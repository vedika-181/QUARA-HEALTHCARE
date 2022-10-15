function searchDoctor()
{
  const input=document.getElementById('filter').value.toUpperCase();
  const CardContainer=document.getElementById('card-wrapper');
  const cards= CardContainer.getElementsByClassName('card');


  for(let i=0; i< cards.length;i++){
    let doctor= cards[i].querySelector('h2.speciality');

    if(doctor.innerText.toUpperCase().indexOf(input) > -1)
    {
      cards[i].style.display = "";
    }
    else{
      cards[i].style.display= "none";
    }
  }

}
