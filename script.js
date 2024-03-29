
const main = document.querySelector('main');

async function fetchStudents ()
{
	const response = await fetch('./promo.json').then(response => response.json());
	const students = response.students;
	
	// get every student from the student file
	students.forEach( student => {
		let card = document.createElement('div');
		let p = document.createElement('p');
		card.className = "text-gray-900 text-lg leading-tight font-medium mb-8 border";
		// verify if username && lastname exist for student + change color depand on the sex
		if(student.lastname && student.firstname && student.sex == "M"){
			card.className = "text-blue-700 text-lg leading-tight font-medium mb-8 border bg-slate-900 w-3/4 ml-20 pl-4 pt-2 text-center";
			card.innerHTML = student.lastname + " " + student.firstname;
		}else if(student.lastname && student.firstname && student.sex == "F"){
			card.className = "text-pink-700 text-lg leading-tight font-medium mb-8 border bg-slate-900 w-3/4 ml-20 pl-4 pt-2 text-center";
			card.innerHTML = student.lastname + " " + student.firstname;
		} // if there is no username && lastname display a message
		else{
			card.innerHTML = "there is no username or lastname";
		}

		// display github link only if user have an account
		if(student.githubid){
			p.innerHTML = `<a href="https://github.com/${student.githubid}" target="_blank"><img src="./images/githubLogoWhite.png" alt="github image" class="pt-2 mb-2 w-8"></a>`
		}
		main.appendChild(card);
		card.appendChild(p);
	});
}

fetchStudents();