const students=[
    {id:15,name:"Ahmed Hridoy"},
    {id:25,name:"TKr Chamak"},
    {id:05,name:"Rafsan Faruk"},
    {id:30,name:"Khairul Islam"},
    {id:75,name:"Taki Kauser"}
];

const names=students.map(student=>student.name);
console.log(names);

const ids=students.map(s=>s.id);
console.log(ids);

const bigger=students.filter(s=>s.id>25);
console.log(bigger);

