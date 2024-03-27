const obj = { 
	name: { 
		firstName: "alice", 
		lastName: null
	}, 
	address: { 
		number: 12345, 
		country: "London", 
		pincode: 208027 
	}, 
	email: "foo@bar.com", 
	hobbies: ["singing", "dancing", "music"], 
} 

const objTwo = { 
	a: null, 
	b: true
} 


function deepCopy(obj) { 

	const result = {}; 

	if (typeof obj !== "object" || 
		typeof obj === undefined || 
		obj === null || 
		Array.isArray(obj) || 
		typeof obj == "function") { 
		return obj; 
	} 

	const keys = Object.keys(obj); 

	for (let key in keys) { 
	
		result[keys[key]] = deepCopy(obj[keys[key]]) 
	} 
	return result; 
} 

const deepCopiedObject = deepCopy(obj) 

const deepCopiedObjectTwo = deepCopy(objTwo); 

obj.address.country = "india"
console.log(deepCopiedObject) 
console.log(obj) 

objTwo.a = "gfg"; 
console.log(deepCopiedObjectTwo) 
console.log(objTwo)
