class Promise {
  constructor() {
    this.callBacks = []
    this.oncatch = null
  }

  then(onsuccess, onfail) {
    this.callBacks.push({
      resolve: onsuccess,
      resolve: onfail
    })
    return this
  }

  resolve(result) {
    this.complete('resolve',result)
  }

  reject(result) {
    this.complete('reject',result)
  }

  complete(type,result) {
    let callBackObj = this.callBacks.shift()
    callBackObj[type](result)
  }

  catch(onfail) {
    this.oncatch = onfail
    return this
  }
}