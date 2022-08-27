// 31-7 (semi-advanced) Class, constructor, method, create object from class:

// syntactic suger
class Instructor {
    name;
    designation = 'web course Instructior'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }

}

const aamir = new Instructor('aamir', 'mumbay');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);

const solaiman = new Instructor('solaiman', 'Dhaka ')
console.log(solaiman);
solaiman.startSupportSession('8:00pm');
solaiman.createQuiz(61);

const Arif = new Instructor('Arif', 'Chittagong');
console.log(Arif);
Arif.startSupportSession('6:00 pm');
Arif.createQuiz('70');