export class StopWatch{
    private _startTime: number = 0 ;
    private _endTime: number = 0;
    constructor(){
        this._startTime= new Date().getMilliseconds();
    }
   start(){
       this._startTime = new Date().getMilliseconds();
   }
   end(){
       this._endTime = new Date().getMilliseconds();
   }
   getTime(){
       return this._endTime-this._startTime;
   }
}