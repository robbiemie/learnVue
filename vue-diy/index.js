/**
 * 依赖收集类
 */
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    // 依赖收集
    this.subs.push(sub)
  }
  remove(sub) {
    if(!this.subs.length) return
    let index = this.subs.indexOf(sub) || -1
    if(index > -1) {
      // 清除依赖
      this.subs.splice(index,1)
    }
  }
  notify() {
    let subs = this.subs.slice()
    for(let i =0,l=subs.length;i<l;i++) {
      // 更新视图
      subs[i].update()
    }
  }
}

