//console.log("I make promise to my frnd that i will him in 5 mins");
let futureStatus = false;

//create promise(By Me)
// let promiseMadeByMe = new Promise((fulfilled, rejected) => {
//   setTimeout(() => {
//     if (futureStatus === true) {
//       fulfilled("Hello frnd..how are you...");
//     } else {
//       rejected("Sorry...Bit busy..and call you later");
//     }
//   }, 5000);
// });

//consume promise(By frnd)
// promiseMadeByMe
//   .then((message) => {
//     console.log("message from frnd:", message);
//   })
//   .catch((err) => {
//     console.log("err is", err);
//   });



let technicalIssues='not nill';

  //Director announced teaser(making a promise) release on tomorrow at 5pm
  console.log("Director announced teaser will be released tomorrow at 5pm")
  let teaserReleasePromise=new Promise((fulfilled,rejected)=>{
     setTimeout(() => {
        if(technicalIssues==='nill'){
            fulfilled("Teaser out....enjoy....")
        }else{
            rejected("Some technical issues...new Date will be announced soon!!!!!")
        }
     }, 10000);
  })


  //fans consuming the promise
  teaserReleasePromise
  .then(message=>console.log("message from then: ",message))
  .catch(message=>console.log("message from catch: ",message))


