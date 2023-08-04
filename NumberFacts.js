// // const url = `http://numbersapi.com/${num}?json`
// let baseURL = 'http://numbersapi.com';
// let num = 5;
// const q1 = document.querySelector('.one-fact');
// const q2 = document.querySelector('.multiple-nums');
// const q3 = document.querySelector('.four-facts');

// // 1.
// $.getJSON(`${baseURL}/${num}?json`).then(data => {
//         $('.one-fact').append(`<li>${data.text}</li>`);
//     });

// // 2.
// let specificNums = [8, 9, 10, 3];
// // axios.get(`${baseURL}/${specificNums}?json`).then(data => {
// //     data.forEach(d => $('.multiple-nums').append(`<li>${d}</li>`));
// // });
// axios.get(`${baseURL}/${specificNums}?json`).then(data => {
//     console.log(data);
// });


// // 3.
// let fourFacts = [];
// for(i=1; i<5; i++) {
//     fourFacts.push(
//         axios.get(`${baseURL}/${num}?json`)
//     );
// }
// Promise.all(fourFacts)
//     .then(facts => (facts.forEach(fact => $('.four-facts').append(`<li>${fact.data.text}</li>`))))
//     .catch(err => console.log(err));

