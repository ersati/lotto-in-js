const resultOne = [];
   const resultTwo = [];
   
   const losowanieone = function() {
   
   if(resultOne.length === 7) return;
   
   
   //tworzymy element div
      const div = document.createElement("div");
	div.setAttribute("class", "div");
	  const wynikLosowania = Math.floor(Math.random() * 49 + 1);;
	  
	  for (let i = 0; i < resultOne.length; i++){
	     if(wynikLosowania === resultOne[i] ){
		 console.log("ta sama liczba");
		 return losowanieone();
		 }
	  }
	  div.textContent = wynikLosowania;
	  
	  document.body.appendChild(div);

	  //dodajemy do tablicy wyników
	  resultOne.push(wynikLosowania);
   }
   
   const losowanietwo = function() {
   
   if(resultTwo.length === 2) return;
   
   
   //tworzymy element div
      const div = document.createElement("div")
	     div.setAttribute("class", "kolo");
	  const wynikLosowania = Math.floor(Math.random() * 11 + 1);
	  
	  for (let i = 0; i < resultTwo.length; i++){
	     if(wynikLosowania === resultTwo[i] ){
		 console.log("ta sama liczba");
		 return losowanietwo();
		 }
	  }
	  div.textContent = wynikLosowania;
	  
	  document.body.appendChild(div);

	  //dodajemy do tablicy wyników
	  resultTwo.push(wynikLosowania);
   }
   
   //Pobranie elementu na ktorym pracujemy
   const buttonone =  document.querySelector(".buttonone")
   const buttontwo =  document.querySelector(".buttontwo")
   //nasluchiwanie na zdarzenie w tym wypadku klika
   buttonone.addEventListener("click", losowanieone)
   buttontwo.addEventListener("click", losowanietwo)