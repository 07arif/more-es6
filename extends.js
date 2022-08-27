// 31-8 (advanced) Inheritance, extends class, super, class method
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thak you for your feedback`)
    }
}

//------
class Instructor extends TeamMember {
    designation = 'web course Instructior'
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }


}

class Developer extends TeamMember {
    designation = 'web course Instructior'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the  ${feature}`)
    }
    release(version) {
        console.log(`please realease the  ${version}`)
    }


}

class JobPlacement extends TeamMember {
    designation = 'Job Placement comandos'
    team = 'Job Placement'
    constructor(name, location, region) {
        super(name, location)
        this.tech
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develop the  ${feature}`)
    }
    release(version) {
        console.log(`please realease the  ${version}`)
    }
}

const alia = new Developer('alia Bhat', 'dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasa = new JobPlacement('bipasa', 'kolkata', 'india');
console.log(bipasa);
bipasa.provideFeedback();


const arif = new Developer('Ariful islam', 'Chittagong', 'React');
console.log(arif)