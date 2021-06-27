class Search{
  constructor(data){
    this.data = data
  }

  insertionSearch(){
    for(let i = 1; i < this.data.length; i++){
    let key = this.data[i] // membuat variale untuk menampung data minimum 
    let j = i - 1 // membuat variable j dari variable i - 1
    while(j >= 0 && key < this.data[j]){ // perulangan sampai j = 0 dan minimum kurang dari data[0]
      this.data[j+1] = this.data[j] // data pada index berikutnya digantikan oleh data[j]
      j--
    }
    this.data[ j + 1] = key // data pada index berikutnya digantikan oleh key
  }
  return this.data
  }
}

module.exports = Search