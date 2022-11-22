// ARRAY

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

// // *1
// const oldestDev = (devList) => {
//     let chosen = devList[0];
//     devList.forEach(dev => {
//         chosen = (chosen.age < dev.age)? dev : chosen;
//     });
//     return chosen;
// }

// console.log(oldestDev(developers));

// // *2
// const cmprAge = (a, b) => {
//     return a.age - b.age;
// }

// // !: MODIFIED THE SRC
// console.log(developers.sort(cmprAge));

// // *3
// const getMaleDev = (devList) => {
//     let res = [];
//     devList.forEach(dev => {
//         if (dev.gender === 'male') res.push(dev);
//     });
//     return res;
// }

// console.log(getMaleDev(developers));

// // *4
// const calcTotalAge = (devList) => {
//     let tol = 0;
//     devList.forEach(dev => {
//         tol += dev.age;
//     });
//     return tol;
// }

// console.log(`Total age of the devs is ${calcTotalAge(developers)}.`);

// // *5
// const getSkillList = (devList) => {
//     let skillList = new Set();
//     devList.forEach(dev => {
//         (dev.skills).forEach(skill => {
//             skillList.add(skill);
//         });
//     });
//     return skillList;
// }

// console.log(getSkillList(developers));

// // *6
// const mostSkilledDev = (devList) => {
//     let chosen = devList[0];
//     devList.forEach(dev => {
//         chosen = (chosen.skills.length < dev.skills.length)? dev : chosen;
//     });
//     return chosen;
// }

// console.log(mostSkilledDev(developers));

// // *7
// const jSDev = developers.filter(dev => dev.skills.find(skill => skill === 'JS') !== undefined);

// console.log(jSDev);

// // *8
// const maleJSDev = developers.filter(dev => ((dev.gender === 'male')&&(dev.skills.find(skill => skill === 'JS') !== undefined)));
// console.log(maleJSDev);

// // *9
// const incrSkills = [...developers].sort((a, b) => b.skills.length - a.skills.length);
// console.log(incrSkills);

// // *10
// const separatedGender = (devList) => {
//     let res = {
//         males: [],
//         female: []
//     };
//     res.males = devList;
//     for (let i = 0; i < devList.length; i++) {
//         if (devList[i].gender === 'female') {
//             res.female.push(devList[i]);
//             devList.splice(i, 1);
//             i--
//         }
//     }
//     return res;
// }

// console.log(separatedGender(developers));