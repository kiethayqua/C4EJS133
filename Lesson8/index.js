// ARRAY
const developers = [
    {
        name: "Nguyễn Văn Tí",
        age: 22,
        gender: 'male',
        skills: ['JS', 'Java', 'C#', 'HTML', 'CSS']
    },
    {
        name: "Nguyễn Văn Tèo",
        age: 20,
        gender: 'male',
        skills: ['Swift', 'Java', 'Kotlin', 'JS']
    },
    {
        name: "Nguyễn Thị Đào",
        age: 19,
        gender: 'female',
        skills: ['C++', 'Go', 'Rust']
    },
    {
        name: "Nguyễn Thị Hoa",
        age: 21,
        gender: 'female',
        skills: ['JS', 'TS']
    },
    {
        name: "Nguyễn Văn Linh",
        age: 18,
        gender: 'male',
        skills: ['Python', 'SQL']
    },
    {
        name: "Nguyễn Thị Hồng",
        age: 23,
        gender: 'female',
        skills: ['Assembly', 'C', 'C++']
    },
];


/* 
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam
    - 4/ Viết function tính tổng tuổi của tất cả developer
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng
    - 6/ Viết function tìm ra developer có nhiều skills nhất
    - 7/ Viết function tìm ra những developer nào có skill là JS
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
    - 10/ Viết function trả về 1 object có dạng 
    {
        males: [{...}],
        females: [{...}]
    }
    Trong đó:
        + males là mảng tất cả các developers có gender là male
        + females là mảng tất cả các developers có gender là female
    
 */
// Q1
const dev1 = developers
function maxAge1(){
    dev1.sort((a,b) => {return b.age - a.age})
    return dev1[0]
}
console.log(maxAge1())
// Q2
const dev2 = developers
function maxAge2(){
    dev1.sort((a,b) => {return a.age - b.age})
    return dev1[0]
}
console.log(maxAge2())
// Q3
const dev3 = developers.filter(a => a.gender === 'male')
console.log(dev3)
// Q4
const dev4 = developers
function maxAge4(){
    let ans = 0;
    dev4.forEach(element => ans += element.age)
    return ans;
}
console.log(maxAge4())
// Q5
const dev5 = developers
function maxAge5(){
    let ans = new Set()
    for(let i = 0;i<dev5.length;i++){
        dev5[i].skills.forEach(element => ans.add(element))
    }
    return ans
}
console.log(maxAge5())
// Q6
const dev6 = developers
function maxAge6(){
    dev5.sort((a,b) => {return b.skills.length - a.skills.length})
    return dev6[0]
}
console.log(maxAge6())
// Q7
const dev7 = developers.filter(a =>  a.skills.includes('JS') == true)
console.log(dev7)
// Q8
const dev8 = developers.filter(a =>  a.gender == 'male' && a.skills.includes('JS') == true)
console.log(dev8)
// Q9 
const dev9 = developers
function maxAge9(){
    dev5.sort((a,b) => {return b.skills.length - a.skills.length})
    return dev9
}
console.log(maxAge9())
// Q10
const devmale = developers.filter(a => a.gender == 'male')
const devfemale = developers.filter(a => a.gender == 'female')
const dev10 = {
    males : devmale,
    females : devfemale
}
console.log(dev10)
