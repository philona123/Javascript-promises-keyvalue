const weather =false
const date = new Promise((resolve,reject) => { 
	if(weather) {
	 const dateDetails = {
  	name: 'Taj',
    location: '55st',
    table: '5'
  };
  resolve(dateDetails)
 } else {
  	reject(new Error('Bad weather, no date'))
}});


const myDate = () => {
	date
  	.then((done) => {
    	console.log('We are going on a date')
      console.log(done)
    })
    .catch(error => 
    	console.log(error.message)
     )
};

myDate();
