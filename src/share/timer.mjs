export default class Timer{
  constructor(func,interval){
    this.running = false;
    this.func = func;
    this.interval = interval;
    this.count = 0;
    this.lastDate = 0;
  }
}
Timer.prototype.timer = function(){
  this.count += Date.now() - this.lastDate;
  this.lastDate = Date.now();
  while (this.count >= this.interval){
    this.count -= this.interval;
    this.func();
  }
  if (this.running)
    setTimeout(()=>{this.timer()}, 10);
}
Timer.prototype.start = function(){
  this.lastDate = Date.now();
  this.running = true;
  this.timer();
}
Timer.prototype.stop = function(){
  this.running = false;
}