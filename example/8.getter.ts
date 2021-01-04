// getter setter

class GetterSetter {
  private _fullname: string;
  get fullname():string {
    console.log('get')
    return this._fullname
  }
  set fullname(name: string) {
    console.log('set')
    this._fullname = name
  }
}
let gettterSetter = new GetterSetter()
gettterSetter.fullname
gettterSetter.fullname = 'si'