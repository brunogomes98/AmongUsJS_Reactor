startReactor = {
    computerCombination: [],
    playerCombination: [],
    computerCombinationPosition: 1,
    combinationMaxPosition: 5,
    memoryMaxCombination: 9,

    audio: {
        start: 'start.mp3',
        fail: 'fail.mp3',
        complete: 'complete.mp3',
        combinations: ['0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3'],
        /* Para rodar todos os audios e fazer o audio tornar um objeto */
    loadAudio(filename){
        const file = `./audio/${filename}?cb=${new Date().getTime()}`
        const audio = new Audio(file)
        audio.load()
        return audio
    },

    /* Carregar os audios */
    loadAudio(){
        startReactor.audio.start = startReactor.audio.loadAudio(startReactor.audio.start)
        startReactor.audio.complete = startReactor.audio.loadAudio(startReactor.audio.complete)
        startReactor.audio.fail = startReactor.audio.loadAudio(startReactor.audio.fail)
        startReactor.audio.combinations = startReactor.audio.combinations.map ( (audio) => startReactor.audio.loadAudio(audio))
    }
    
    },
    interface: {},
    load() { },
    start() {
        
    }
}