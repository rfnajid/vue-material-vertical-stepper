<template>
  <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary">
          <span class="md-title">BCA Life Virtual Closing</span>
        </md-app-toolbar>

        <!-- APP DRAWER -->
        <md-app-drawer id="drawer" md-permanent="clipped">
          <md-toolbar class="md-transparent" md-elevation="0">
            Navigation
          </md-toolbar>

          <md-list>
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Ilustrasi</span>
            </md-list-item>

            <md-list-item>
              <md-icon>send</md-icon>
              <span class="md-list-item-text">SPAJ</span>
            </md-list-item>

            <md-list-item>
              <md-icon>delete</md-icon>
              <span class="md-list-item-text">Syarat Ketentuan</span>
            </md-list-item>

            <md-list-item>
              <md-icon>error</md-icon>
              <span class="md-list-item-text">Sign</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          
        <!-- WITH STEPPER -->
          <md-steppers md-vertical md-linear>
            <md-step id="first" md-label="Ilustrasi RIPLAY" md-description="Document">
            <div class="pdf-viewer-container">
              <iframe class="pdf-viewer" src="http://www.africau.edu/images/default/sample.pdf"/>
            </div>
            <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="second" md-label="SPAJ" md-description="Document">
            <div class="pdf-viewer-container">
              <iframe class="pdf-viewer" src="http://www.africau.edu/images/default/sample.pdf"/>
            </div>
            <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button>
            </md-step>

            <md-step id="third" md-label="Syarat Ketentuan">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>
          </md-steppers>

          <!-- NO STEPPER -->
            <!-- <div class="pdf-viewer-container">
              <iframe class="pdf-viewer" src="http://www.africau.edu/images/default/sample.pdf"/>
            </div>
            <md-button class="md-raised md-primary" @click="setDone('first', 'second')">Continue</md-button> -->

        </md-app-content>
      </md-app>
  </div>
</template>

<script>
  export default {
    name: 'StepperVertical',
    data: () => ({
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null
    }),
    methods: {
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null

        if (index) {
          this.active = index
        }
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
    }
  }
</script>

<style >

@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}

#drawer{
  width: auto;
  padding: 33px;
}

.pdf-viewer-container {
  height: 600px;
}
.pdf-viewer-container > .pdf-viewer{
  width:100%;
  height:100%;
}
</style>
