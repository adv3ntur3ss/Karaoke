<template>
  <div class="m-0">
    <div class="container w-screen h-screen font-sans">
      <section class="bg-gradient w-screen h-screen flex flex-col">
        <LayoutHeader />
        <div class="w-screen h-[150px] py-9 text-center font-semibold text-7xl">
          {{ timerCount }}
        </div>
        <div class="w-screen h-[240px] bg-stone-800 flex flex-col">
          <div
            class="h-80 w-6 bg-cyan-300 absolute opacity-75 left-[13vw] top-[160px] rounded-lg"
          ></div>

          <GuitarString1></GuitarString1>

          <div id="string" class="h-[24px] w-screen my-[8px] py-2 relative">
            <div class="h-[8px] w-screen bg-slate-300"></div>
            <div ref="movin0" class="note_0 note">0</div>
            <div ref="movin1" class="note_0 note">0</div>
          </div>

          <GuitarString3></GuitarString3>

          <GuitarString4></GuitarString4>

          <GuitarString5></GuitarString5>

          <GuitarString6></GuitarString6>
        </div>
        <div class="h-10 w-screen my-6 text-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            v-if="this.startIsHidden == false"
            @click="toggleHiddenState(), changeValue()"
          >
            start
          </button>
        </div>
        <div class="h-10 w-screen my-6 text-center">
          <button
            v-if="this.listenHidden == 1"
            class="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="listenToRecording()"
          >
            vypocuj si ako si hral
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/components/header.vue"
import GuitarString1 from "@/components/twinkle-level/string1.vue"
// import GuitarString2 from "@/components/twinkle-level/string2.vue"
import GuitarString3 from "@/components/twinkle-level/string3.vue"
import GuitarString4 from "@/components/twinkle-level/string4.vue"
import GuitarString5 from "@/components/twinkle-level/string5.vue"
import GuitarString6 from "@/components/twinkle-level/string6.vue"

export default {
  components: {
    LayoutHeader,
    GuitarString1,
    // GuitarString2,
    GuitarString3,
    GuitarString4,
    GuitarString5,
    GuitarString6,
  },
  data() {
    return {
      timerCount: 3,
      hidden: 1,
      startIsHidden: false,
      audio: null,
      playback: null,
      recorder: null,
      audioChunks: [],
      blob: null,
      device: null,
      starter: false,
      listenHidden: 0,
    }
  },

  methods: {
    toggleHiddenState() {
      this.startIsHidden = true
    },
    changeValue() {
      let timer = setInterval(() => {
        this.timerCount--
        console.log(this.timerCount)
        if (this.timerCount == 0) {
          clearInterval(timer)
          this.timerCount = null
          this.gamePlay()
        }
      }, 1000)
    },

    gamePlay() {
      this.recordAudio()
      console.log(this.device)
      this.playAudio()
      // this.compareSound()
        setTimeout(() => this.move(this.$refs.movin0), 430)
        setTimeout(() => this.move(this.$refs.movin1), 800)
        // setTimeout(() => this.move(this.$refs.movin2), 1500)
        // setTimeout(() => this.move(this.$refs.movin3), 2000)
    },
    playAudio() {
      this.audio = new Audio(require("@/assets/audio/twinkle.mp3"))
      this.audio.play()
      setTimeout(() => {
        this.audio.pause()
      }, 10000)
    },
    move(square) {
      let x = 95.5
      let pohyb = setInterval(() => {
        x = x - 0.1
        square.style.left = x + "vw"
        square.style.display = "block"
        if (square.style.left == 13 + "vw")
          square.style.backgroundColor = "#1d18c4"
        if (square.style.left < -15 + "vw") {
          clearInterval(pohyb)
          square.style.left = null
          square.style.display = null
        }
      }, 5)
    },
    recordAudio() {
      this.device = navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          this.recorder = new MediaRecorder(stream)
          console.log(this.recorder.state)
          this.recorder.ondataavailable = (e) => {
            this.audioChunks.push(e.data)
            if (this.recorder.state == "inactive") {
              this.blob = new Blob(this.audioChunks)
              const audioUrl = URL.createObjectURL(this.blob)
              this.playback = new Audio(audioUrl)
            }
          }
          this.recorder.start()
        })
        .catch((err) => {
          alert(err.name + ": " + err.message)
        })
      setTimeout(() => {
        this.recorder.stop()
        this.listenHidden = 1
      }, 10000)
      setTimeout(() => {
        console.log(this.audioChunks)
      }, 5100)
      setTimeout(() => {
        console.log(this.audioChunks)
      }, 11100)
      setInterval(() => {
        console.log(this.recorder.state, "2")
      }, 1000)
    },
    listenToRecording() {
      this.playback.play()
    },
  },
}
</script>
