let mongoLight = new (require('../node-mongo-light/lib/mongolight'))({"db": "local.nodejs_cms"});
setTimeout(() => {
  mongoLight.insert([{"johnny": "boy"}], (error, result) => {
    //let timer2 = new Date();
    console.log('core');
    //console.log((timer2.getTime() - timer1.getTime()));
  });
}, 1000);