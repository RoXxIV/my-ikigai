<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>Dévoiler Son <span>Potentiel</span></h1>
      <h2>Exploration de Soi</h2>
      <p>
        Mettez en lumière votre <span>Ikigai</span> pour révéler et <br />
        exploiter pleinement votre potentiel unique, <br />en 10 minutes
        seulement.
      </p>
      <button>Démarrez Votre Voyage</button>
    </div>
    <div class="illustrations">
      <img src="~/assets/img/colourful_smoke.png" alt="" />
      <div class="circle"></div>
      <img class="forms" src="~/assets/img/forms.png" alt="" />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero-section {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 100px auto 250px auto;
  .hero-content {
    width: 50%;
    h1 {
      font-size: 2.5em;
      text-align: center;
      span {
        color: $purple;
      }
    }
    h2 {
      font-size: 1.5em;
      text-align: end;
      margin-right: 100px;
      text-decoration: underline;
    }
    p {
      font-size: 1.2em;
      margin-top: 50px;
      text-align: center;
      font-weight: 800;
      span {
        color: $purple;
      }
    }
    button {
      display: block;
      margin: 50px auto 0 auto;
    }
  }

  .illustrations {
    width: 50%;
    position: relative;
    img {
      max-width: 110%;
      height: auto;
    }
    .circle {
      position: absolute;
      width: 50vw;
      height: 50vw;
      max-width: 400px;
      max-height: 400px;
      border: 40px solid black;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("~/assets/img/monk.png");
      background-size: cover;
      background-position: center;
    }
    .forms {
      position: absolute;
      top: 10%;
      left: 80%;
      transform: translate(-50%, -50%);
    }
  }
  /** media queries */
  @include media-max(1100px) {
    width: 100%;
    @include media-max(991.98px) {
      flex-direction: column;
      .hero-content {
        width: 90%;
        h2 {
          margin-right: 0;
          text-align: center;
        }
      }
      .illustrations {
        margin-top: 70px;
        .circle {
          width: 40vw;
          height: 40vw;
          border: 10px solid black;
        }
      }
    }
  }
}
/*
@include media-max(1340px) {
    width: 100%;
  }
  @include media-max(991.98px) {
    flex-direction: column;
    .hero-content,
    .illustrations {
      width: 100%;
    }
    .circle {
      width: 40vw;
      height: 40vw;
    }
  }
  @include media-max(667.98px) {
    h2 {
      margin-right: 0;
      text-align: center;
    }
  }
  */
</style>
