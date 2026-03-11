function dev(studName, studAge) {
    this.name = studName;
    this.age = studAge;
}
// to add ptoprty
dev.prototype.id = 1;
dev.prototype.infoDev =  () => {
    return `Myself :- ${this.name} & AGe :- ${this.age}.`
};
let info = new dev("Dev", 23);

console.log(info);
console.log(info.id)
console.log(info.infoDev());