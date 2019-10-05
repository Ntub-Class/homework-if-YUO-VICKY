// 請介紹兩個字串方法跟數字方法
//1.String.prototype.trim() 將字串的左右空白刪除不會刪除英文間的空白
//用法如下:
let str1 = '   Hello world!   ';
console.log(str1);
console.log(str1.trim());
//2.String.prototype.slice() 從第幾個位置開始取字串
let str2 = 'The quick brown fox jumps over the lazy dog.';
console.log(str2.slice(31));
console.log(str2.slice(4, 19));//從第四位開始取19個字

//1.Number.isFinite() 檢查數字是否有值
let a = 0;
console.log(Number.isFinite(1000 / a)); //印出false
a = 1;
console.log(Number.isFinite(1000 / a));   //印出true

//2.Number.toPrecision() 將數字改為指定的精確度，參數為指定小數點後的位數
let b = 22.045869
let b1 = b.toPrecision(2);
let b2 = b.toPrecision(4);
console.log(b1);
console.log(b2);

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('乾爹');
} else {
    console.log('');
}

