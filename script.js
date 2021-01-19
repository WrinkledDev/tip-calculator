(
  function(){
    let bill = document.getElementById("bill");
    let people = document.getElementById("people");
    let service = document.getElementById("service"); 
    let button = document.querySelector(".calculate");
    let result = document.querySelector(".result");
    let result_tip = document.querySelector(".result-tip");
    let result_total_bill = document.querySelector(".result-total-bill");
    let result_per_person = document.querySelector(".result-per-person");
    let error = document.querySelector(".error");
    let errorAmount = document.querySelector(".error-amount");
    let errorPeople = document.querySelector(".error-people");
    let errorService = document.querySelector(".error-service");

    button.addEventListener('click', extractValues)

    function extractValues(e){

      e.preventDefault();

      if(bill.value === "" || people.value === "" || service.value === ""){
        if(bill.value === ""){
          errorAmount.innerHTML = "Bill Amount Cannot Be Blank.";
        }
        if(people.value === ""){
          errorPeople.innerHTML = "Number of Users Must Be Greater Than Zero. ";
        }
        if(service.value === ""){
          errorService.innerHTML = "You must define the service quality. ";
        }

        setTimeout(showDiv, 200);

        function showDiv(){
          error.style.display = "block";
        }

        setTimeout(hideDiv, 5000);

        function hideDiv(){
          error.style.display = "none";
        }

        errorMessage.innerHTML = message;

      }

      let tip = parseFloat(bill.value) * parseFloat(service.value);
      let total_bill = parseFloat(bill.value) + tip;
      let share_per_person = total_bill / parseInt(people.value);

      setTimeout(showDiv, 200);

      function showDiv(){
        result.style.display = "block";
      }

      setTimeout(hideDiv, 5000);

      function hideDiv(){
        result.style.display = "none";
      }

      bill.value = "";
      people.value = "";
      service.value = "";

      result_tip.innerHTML = `Tip Amount \$${tip.toFixed(2)}`;
      result_total_bill.innerHTML = `Total Amount \$${total_bill.toFixed(2)}`;
      result_per_person.innerHTML= `Each Person Owes \$${share_per_person.toFixed(2)}`;

    }

  }
)()