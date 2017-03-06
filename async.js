import request from 'request';
let finger;
class Tools{
       static async getQuote(){
            return await new Promise(function(resolve, reject) {
              request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', function(error, response, body) {
                if (error) return reject(error);
                    let finger = body;
                    resolve(console.log(body + finger));
              });
            });
        }

         static async  main() {
          try {
            console.time("timestart")
            let quote = await Tools.getQuote();
            // await quote;
            console.timeEnd("timestart");
          } catch(error) {
            console.error(error);
          }
        }
}
// let tools = new Tools();
Tools.main();

// function wait(ms) {
//    return new Promise(r => setTimeout(r, ms))
// }

// async function main() {
//    console.time('wait2s')
//    let w1 = await wait(1000)
//    let w2 = await wait(2000)
//    console.timeEnd('wait2s')
// }
// main();