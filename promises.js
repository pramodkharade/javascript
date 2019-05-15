const postsp = [{
	'title':'Post one',
	'body':'Post Body one'
},
{
	'title':'Post Two',
	'body':'Post Body two'
}];


function getPosts(){
	setTimeout(()=>{
		let output='';
		postsp.forEach((post,index)=>{
			output += `<li>${post.title}</li>`;
		});
		document.getElementById('promisespostwrapper').innerHTML = output;
	},1000);
}


function createPost(post){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			
		postsp.push(post);
		const error = false;
		if(!error){
			resolve();
		}else{
			reject('Error: something went wrong');
		}
	},2000);	
	});
	
}

createPost({title:'Promise post',body:'Promise body'}).then(getPosts).catch(error=> console.log(error));


/***async / await /fetch***/


async function getUsers(){
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	const data = await res.json();
	console.log(data);
}

getUsers();