// OBEJECTS

// let cafe = {
//     // key value
//     // property value
//     name: "dreamy coffee",
//     seatingCapacity: 30,
// }

let person = {
    name:"brayner",
    age: 23,
    favoriteSongs: [
        "Gorrillaz - feel good inc",
        "eiffel65 - blue (da ba dee da ba dai)",
        "Metronomy - the bay"
    ],
    likesFootball : true,
    sayHi(){
        return `hello my name is ${this.name}`
    },
    doesLikeFotball() {
        if (this.likesFootball){
            return 'leon definitely likes football'
        }
    }
}
console.log(person.sayHi())

// console.log (person.name1)
// console.log(person["age"])


// const weekendAlarm = {
//     message: "No alarm needed"
//   }
  
//   const weekdayAlarm = {
//     message: "Get up at 7 am"
//   }
  
//   function setAlarm(day) {
//     if (day === "saturday" || day === "sunday") {
//       return weekendAlarm
//     } else {
//       return weekdayAlarm
//     }
//   }
  
//   const day = "Saturday"
//   const alarm = setAlarm(day)
  
//   console.log(`Today is ${day}, set alarm: ${alarm.message}`)