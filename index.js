const renderPost=async ()=>{
	let url="http://localhost:3000/posts"
	const res = await fetch(url)
	const posts= await res.json()
	console.log(posts)
}
window.addEventListener("DOMContentLoaded",()=>renderPost())


const createPost=async(e)=>{
	form= document.getElementById('account')
	const doc ={
		"user":`${form.user.value}`,
		"password":`${form.password.value}`
	     }
		
await fetch("http://localhost:3000/profile",{
	        method:"POST",
	        body:JSON.stringify(doc),
	        headers:{"content-Type":"application/json"}})
		}
	
