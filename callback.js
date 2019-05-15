const posts = [{
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
		posts.forEach((post,index)=>{
			output += `<li>${post.title}</li>`;
		});
		document.getElementById('callbackpostwrapper').innerHTML = output;
	},1000);
}


function createPost(post,callback){
	setTimeout(()=>{
		posts.push(post);
		callback();
	},2000);
}

createPost({'title':'post three','body':'Post body three'},getPosts);