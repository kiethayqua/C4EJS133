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

// ARRAY

// Cho 1 mảng có dạng:

    // - 1/ Viết function tìm ra developer lớn tuổi nhất

    function maxAge(obj)
    {
        let mx = obj[0].age, tmp = obj[0];
        for (let i = 1; i < obj.length; i++)
            if(obj[i].age > mx)
                mx = obj[i].age, tmp = obj[i];
        return tmp;
    }

    console.log(maxAge(developers));
    
    // - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao

    function Sort(obj)
    {
        return [...obj].sort((a, b) => a.age - b.age);
    }

    console.log(Sort(developers));

    // - 3/ Viết function tìm ra những developer nam

    function male(obj)
    {
        return [...obj].filter(item => item.gender === "male");
    }

    console.log(male(developers));

    // - 4/ Viết function tính tổng tuổi của tất cả developer

    function sumAge(obj)
    {
        let ans = 0;
        obj.forEach(item => { ans += item.age; });
        return ans;
    }
    console.log(sumAge(developers));

    // - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng

    function skills(obj)
    {
        let ans = [];
        let map = {};
        obj.forEach(item => 
            { 
                item.skills.forEach(sk => 
                    {
                        if(!map[sk]) ans.push(sk), map[sk] = 1;
                    });
            });
        return ans;
    }

    console.log(skills(developers));

    // - 6/ Viết function tìm ra developer có nhiều skills nhất

    function mostSkills(obj)
    {
        let mx = obj[0].age, tmp = obj[0];
        for (let i = 1; i < obj.length; i++)
            if(obj[i].skills.length > mx)
                mx = obj[i].skills.length, tmp = obj[i];
        return tmp;
    }

    console.log(mostSkills(developers));

    // - 7/ Viết function tìm ra những developer nào có skill là JS

    function skillJS(obj)
    {
        return [...obj].filter(item => item.skills.find(sk => sk === "JS") );
    }

    console.log(skillJS(developers));

    // - 8/ Viết function tìm ra những developer có gender là male và có skill JS

    function skillJS_and_male(obj)
    {
        return [...obj].filter(item => (item.skills.find(sk => sk === "JS") && item.gender === "male") );
    }

    console.log(skillJS_and_male(developers));

    // - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất

    function sort_desc_skills(obj)
    {
        return [...obj].sort((a, b) => b.skills.length - a.skills.length);
    }

    console.log(sort_desc_skills(developers));

    // - 10/ Viết function trả về 1 object có dạng 
    // {
    //     males: [{...}],
    //     females: [{...}]
    // }
    // Trong đó:
    //     + males là mảng tất cả các developers có gender là male
    //     + females là mảng tất cả các developers có gender là female

    let males, females;
    function gender(obj, textGender)
    {
        return [...obj].filter(item =>  item.gender === textGender );
    }

    console.log(gender(developers, "male"));
    console.log(gender(developers, "female"));
        

