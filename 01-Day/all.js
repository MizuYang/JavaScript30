const wordArr = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const onKeyDownNum = ['65', '83', '68', '70', '71', '72', '74', '75', '76']

window.addEventListener('keydown', onKeyDown)

//* 印出 字母
function renderWordArr() {
    let str = ''
    wordArr.forEach((word, i) => {
        str += `<div class="wordBox fs-lg text-color word${i}">${word}</div>`
    })
    document.querySelector('.container').innerHTML = str
}
//* 按下按鍵
function onKeyDown(e) {
    const keyCode = e.keyCode
    let newOnKeyDownNum = 0
    newOnKeyDownNum = onKeyDownNum.findIndex((onKeyDownNum) => {
        return onKeyDownNum == keyCode
    })
    onKeyDownWordHightLight(newOnKeyDownNum)
    playMusic(newOnKeyDownNum)
}
//* 按鍵文字高亮
function onKeyDownWordHightLight(word) {
    const wordDom = document.querySelector(`.word${word}`)
    if (wordDom) {
        wordDom.classList.add('onKeyDownStyle')
        setTimeout(() => {
            wordDom.classList.remove('onKeyDownStyle')
        }, 100)
    }
}
//* 播放音樂
function playMusic(index) {
    const audio = document.querySelectorAll('audio')
    if (audio[index]) {  //* 如果有這個音樂檔才執行
        audio[index].currentTime = 0 //* 音樂秒數歸零
        audio[index].play()
    }
}
renderWordArr()