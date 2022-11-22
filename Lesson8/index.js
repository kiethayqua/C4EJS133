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
        age: 25,
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
    }
];

function maxAge(devs) {
    let max = 0;
    let dev = null;

    devs.forEach((item) => {
        if (item.age > max) {
            max = item.age;
            dev = item;
        }
    });

    return dev;
}
// console.log(maxAge(developers));

function sortAge(devs) {
    return [...devs].sort((dev1, dev2) => dev1.age - dev2.age);
}

// console.log(sortAge(developers));

function filterMales(devs) {
    return devs.filter(item => item.gender === 'male');
}
// console.log(filterMales(developers));

function sumAge(devs) {
    let ages = 0;
    devs.forEach(dev => {
        ages += dev.age;
    });
    return ages;
}
// console.log(sumAge(developers));

function allSkills(devs) {
    let skills = new Set();
    devs.forEach(dev => {
        dev.skills.forEach(skill => {
            skills.add(skill);
        });
    });

    return skills;
}
// console.log(allSkills(developers));

function filterGender(devs) {
    // C1:
    // let males = [], females = [];
    // devs.forEach(dev => {
    //     if (dev.gender === 'male') {
    //         males.push(dev);
    //     } else {
    //         females.push(dev);
    //     }
    // });

    // return {
    //     males,
    //     females
    // }

    // C2:
    return devs.reduce((obj, dev) => {
        const newDev = [dev];
        if (!obj[dev.gender]) {
            obj[dev.gender] = newDev;
        } else {
            obj[dev.gender] = [...obj[dev.gender], ...newDev];
        }
        return obj;
    }, {});
}

console.log(filterGender(developers));