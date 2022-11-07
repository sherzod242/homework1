// операторы инкремент(++) и декримент(--)
// var i = 0
// var b
// console.log(i);
// постфикс инкримент
// b = i++ // b = 0  i = 0 + 1
// console.log(i);
// console.log(b);
// постфикс декримент
// console.log(i--);
// console.log(i);
// console.log(i-=1); // i = 2 - i
// console.log(i);

// префикс инкримент
// b = ++i // b = i + 1 i
// console.log(i);
// console.log(b);
// префикс декримент
// console.log(--i);

// циклы while
// var i = 0;
// while(i < 10){
//   console.log(i);
//   i++
// }
// var i = 10;
// while(i > 0){
//   i--
//   console.log(i);
// }

// циклы do while
// var i = 0;
// do{
//   console.log(i);
//   i++
// }while(i < 10)
// let num
// do{
//   num = Number(prompt('Введите число не равное 2'))
// }while(num == 2)
//   console.log(num);
  
// цикл for
// var i = 'lorem'
// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i + ' t');

// var text = 'text'
// console.log(text);
// var text = 10
// console.log(text);

// let text = 'text'
// console.log(text);
//     text = 10
// console.log(text);

// const UserName = 'Mike'
// console.log(UserName);
//       UserName = 'John'

/* 
#
##
###
####
#####
*/
// var num = 5
// var str = ''
// for(let i = 0; i < num; i++){
//   str += '#'
//   console.log(str);
// }
/* 
#####
####
###
##
#
*/
// var num = 5
// var str = ''
// for(let i = 0; i < num; i++){
//  for(let j = 0; j < num - i; j++){
//   str += '#'
//  }
//  console.log(str);
//  str = ''
// }

/* 
#
-#
--#
---#
----#
---#
--#
-#
#
*/
var num = 5
var str = ''
var int = 0
for(let i = 0; i < num * 2 - 1; i++){
  if(int < num){
    for(let j = 0; j < i + 1; j++){
      if(j == 0){
        str += '#'
      }else{
        str = '-' + str
      }
    }
  }else{
    for(let j = 0; j < num * 2 - i - 1; j++){
      if(j == 0){
        str += '#'
      }else{
        str = '-' + str
      }
    }
  }
  console.log(str);
  int++
  str = ''
}




/* 
----#
---###
--#####
-#######
#########
*/
/* 
----#
---###
--#####
-#######
#########
-#######
--#####
---###
----#
*/