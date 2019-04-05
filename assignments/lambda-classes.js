// CODE here for your Lambda Classes








class Person {
	constructor(peopleAttrs) {
		this.name = peopleAttrs.name;
		this.age = peopleAttrs.age;
		this.location = peopleAttrs.location;
		this.gender = peopleAttrs.gender;
	}
	speak() {
		console.log(`Hello, my name is ${this.name}, and I am from ${this.location}`)
	}
}

class Instructor extends Person {
	constructor(instAttrs) {
		super(instAttrs);
		this.specialty = instAttrs.specialty;
		this.favLanguage = instAttrs.favLanguage;
		this.catchPhrase = instAttrs.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are learning about ${subject}`)
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`)
	}
}

class Student extends Person {
	constructor (stuAttrs) {
		super(stuAttrs);
		this.previousBackground = stuAttrs.previousBackground;
		this.className = stuAttrs.className;
		this.favSubjects = stuAttrs.favSubjects;
		
	}
	
	listsSubjects() {
		console.log(`My favorite subjects are ${this.favSubjects}`)
	}
	PRAssignments(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`)
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`)
	}
}

class ProjectManager extends Instructor {
	constructor(PMAttrs) {
		super(PMAttrs);
		this.gradClassName = PMAttrs.gradClassName;
		this.favInstructor = PMAttrs.favInstructor;
	}
	standUp(slack) {
		console.log(`${this.name} announces to ${slack}, @channel standy times!`)
	}
	debugsCode (studentObj, subject) {
		console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
	}
}


// People Objects


const ben = new Student({
	name: 'Ben Q',
	age: 28,
	location: 'Saratoga Springs, Utah',
	gender: 'Male',
	previousBackground: ['Computer Hardware', 'Small Electronics Repair'],
	className: 'WEBPT5',
	favSubjects: ['JavaScript', 'Science', 'Math']
})

const cam = new Instructor({
	name: 'Cam',
	age: 32,
	location: 'Lehi, Utah',
	gender: 'Male',
	specialty: 'Video Games',
	favLanguage: 'JavaScript',
	catchPhrase: 'Never tell me the odds!'
})

const ronald = new ProjectManager ({
	name: 'Ronald',
	age: 'Twenties',
	location: 'California',
	gender: 'Male',
	specialty: 'Video Games',
	favLanguage: 'JavaScript',
	catchPhrase: 'He is the best... Around!',
	gradClassName: 'Web12 Grad',
	favInstructor: 'Cam Pope'
})

ben.speak()
ben.listsSubjects()
ben.PRAssignments('JavaScript')
ben.sprintChallenge('JavaScript')

cam.speak()
cam.demo('JavaScript')
cam.grade(ben, 'JavaScript')

ronald.speak()
ronald.demo('JavaScript')
ronald.grade(ben, 'JavaScript')
ronald.standUp('@WebPT5')
ronald.debugsCode(ben, 'JavaScript')

console.log(ben)
console.log(cam)
console.log(ronald)





