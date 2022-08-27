// 31-2 Access Value, nested object Optional chaining
const users = [{ id: 1, name: 'abul', Job: 'doctor' }];
// console.log(users[0]);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 1, name: 'dabul', job: 'leader' },

    ]
}
const firstJob = data.data[0].name;
// console.log(firstJob);

const user = {
    name: 'Thomas alba edison',
    address: {
        street: {
            firstLine: '581/Mojid mansion',
            secondLine: 'pahartali'
        },
        postoffice: 'firozsha',
        city: 'chittagong',
    }
}
const nameCity = user.address.stret?.firstLine;
console.log(nameCity)

