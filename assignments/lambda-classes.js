// CODE here for your Lambda Classes
class Person{
    constructor(human){
        this.name = human.name;
        this.age = human.age;
        this.location = human.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
};

class Instructor extends Person{
    constructor(inst){
        super(inst);
        this.specialty = inst.specialty;
        this.favLanguage = inst.favLanguage;
        this.catchPhrase = inst.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    };
    grade(Student,i){
        console.log(`${Student.name} recieves a perfect score from ${this.name} in ${Student.favSubjects[i]}`);
    };
}

class Student extends Person{
    constructor(stu){
        super(stu);
        this.previousBackground = stu.previousBackground;
        this.className = stu.previousBackground;
        this.favSubjects = stu.favSubjects;
    }
    listsSubjects = function(){
        console.log(this.favSubjects);
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    };
};

class ProjectManager extends Instructor{
    constructor(proj){
        super(proj);
        this.gradClassName = proj.gradClassName;
        this.favInstructor = proj.favInstructor;
    };
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    };
    debugsCode(Student, subject){
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`);
    }
}

const crocker = new Instructor({
    name: 'crocker',
    location: 'fairyland',
    age: '40',
    favLanguage: 'fairy language',
    specialty: 'catching fairys',
    catchPhrase: 'Admit it! You have FAIRY GOD PARENTS!!'
});

const kimboSlice = new Instructor({
    name: 'Kimbo-Slice',
    location: 'The backyard',
    age: 'Immortal',
    favLanguage: 'Jive',
    specialty: 'Destroying',
    catchPhrase: `C'MON GET UP GET UP`
});

const dannyP = new Student({
    name: `Danny Phantom`,
    previousBackground: `Ghost-Fighter`,
    className: `Gh0sT-1`,
    favSubjects: [`Going Ghost`,`Biology`,`Paranormal-studies`]
});

const spongeBob = new Student({
    name: `Sponge-Bob Squarepants`,
    previousBackground: `Fry-Cook`,
    className: `boating-29`,
    favSubjects: [`boating`,`jelly-fishing`,`patty-flipping`]
});

const gohan = new Student({
    name: `Gohan`,
    previousBackground: `Z-Fighters`,
    className: `ki-1342`,
    favSubjects: [`medicine`,`super101`,`spirtuality`]
});

const jimmyN = new ProjectManager({
    name: `Jimmy Neutron`,
    gradClassName: `sci9000`,
    favInstructor: `himself`
});

const robin = new ProjectManager({
    name: `Robin`,
    gradClassName: `bat1-1`,
    favInstructor: `batman`
});

kimboSlice.grade(gohan,1);
crocker.demo('catching fairys');
console.log(crocker.catchPhrase);
console.log(gohan.previousBackground);
spongeBob.listsSubjects();
dannyP.PRAssignment(`ghost101`);
spongeBob.sprintChallenge(`boating`);
console.log(jimmyN.gradClassName);
console.log(robin.favInstructor);
jimmyN.debugsCode(gohan,`Ki-00`);
robin.standUp(`bats101`);





