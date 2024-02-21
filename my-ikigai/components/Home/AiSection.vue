<template>
  <section class="ia-section">
    <div class="text-content">
      <h2>L'IA Révèle Votre Parcours</h2>
      <h3>
        Utilisez l'analyse intelligente pour prendre <br />des
        <span>décisions alignées avec votre essence</span>
      </h3>

      <p>
        Notre outil utilise l'intelligence artificielle pour personnaliser votre
        quête de l'<span>Ikigai</span>. En quelques questions clés, l'IA analyse
        vos réponses pour vous offrir des insights adaptés à votre parcours
        unique. Cette méthode innovante assure une exploration précise de votre
        raison d'être, en harmonie avec vos aspirations.
      </p>

      <button>Commencer le Test</button>
    </div>

    <div class="shapes">
      <img src="~/assets/img/circle.png" alt="" class="circle" />
      <img src="~/assets/img/star.png" alt="" class="stars" />
      <img src="~/assets/img/triangle.png" alt="" class="triangle" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.ia-section {
  width: 80%;
  margin: 250px auto 100px auto;
  position: relative;
  .text-content {
    h2 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 50px;
    }
    h3 {
      font-size: 1.5em;
      text-align: center;

      span {
        color: $purple;
      }
    }
    p {
      text-align: center;
      font-size: 1.2em;
      margin: 50px auto;
      width: 60%;
      span {
        color: $purple;
      }
    }
    button {
      display: block;
      margin: 100px auto 0 auto;
    }
  }
  .bamboo {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 20%;
    left: 75%;
    img {
      max-width: 250px;
    }
    p {
      font-size: 0.9em;
      text-align: center;
      margin: 0;
    }
  }
  .shapes {
    img {
      max-width: 100px;
      position: absolute;
      z-index: -1;
    }
    .circle {
      top: -20%;
      left: 30%;
      max-width: 70px;
    }
    .stars {
      top: 10%;
      left: 80%;
    }
    .triangle {
      top: 70%;
      left: 25%;
    }
  }
  /** media queries */
  @include media-max(991.98px) {
    width: 90%;
    .text-content p {
      width: 100%;
    }

    @include media-max(667.98px) {
      .text-content {
        h2 {
          font-size: 1.5em;
        }
        h3 {
          font-size: 1.2em;
        }
        p {
          font-size: 1em;
        }
      }
      .bamboo {
        top: 10%;
        left: 50%;
        img {
          max-width: 150px;
        }
        p {
          font-size: 0.8em;
        }
      }
      .shapes {
        img {
          max-width: 50px;
        }
        .circle {
          top: -10%;
          left: 20%;
          max-width: 50px;
        }
        .stars {
          top: 30%;
          left: 60%;
        }
        .triangle {
          top: 80%;
          left: 70%;
        }
      }
    }
  }
}
</style>
