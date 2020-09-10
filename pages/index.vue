<template>
  <div class="container">
    <header class="header">
      <div class="social-media">
        <font-awesome-icon class="header-social-media__icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
        <font-awesome-icon class="header-social-media__icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
        <font-awesome-icon class="header-social-media__icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
        <font-awesome-icon class="header-social-media__icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/>
      </div>
    </header>

    <section class="hero" :style="{ backgroundImage: 'url(' + require('~/static/images/hero.jpg') + ')' }">
      <img class="logo" :src="require(`~/static/images/logo.png`)" alt="Deziguais">
    </section>

    <section class="who-we-are" :style="{ backgroundImage: 'url(' + require('~/static/images/bg.png') + ')' }">
      <h1>Quem somos</h1>
      <p>DEZ natalenses de diferentes origens e com trajetórias em diversas causas, trazendo o senso  de coletividade na participação política, com o objetivo de transformar Natal em uma cidade com oportunidades IGUAIS para todos e todas. A pré-candidatura coletiva é uma experiência política moderna e inovadora.</p>
      <p>É a ideia de coletividade, que vai de encontro à lógica da velha e antiga política de individualismo, que afasta as pessoas comuns do exercício do poder.</p>
      <h2>O Coletivo DezIguais é uma forma viável, saudável e honesta de fazer política.</h2>
    </section>

    <img class="deziguais-img" :src="require(`~/static/images/what-we-want.jpg`)" alt="Deziguais">

    <section class="what-we-want" :style="{ backgroundImage: 'url(' + require('~/static/images/bg.png') + ')' }">
      <h1>O que queremos</h1>
      <p>Queremos ocupar um gabinete na Câmara Municipal de Natal com pessoas comprometidas em levar para dentro dos espaços de poder as causas que defendemos e oxigenar as discussões políticas com a participação de pessoas diversas, de diferentes raças, gêneros, classes sociais e ativismos. Com isonomia, diálogo e transparência que são os princípios que norteiam as relações dentro do projeto coletivo.</p>
    </section>

    <section class="join-the-change" :style="{ backgroundImage: 'url(' + require('~/static/images/bg-join-the-change.jpg') + ')' }">
      <h1>Participe da mudança</h1>
      <div class="change-items">
        <div class="change-item">
          <img :src="require(`~/static/images/apoiar.png`)" alt="Apoiar">
          <p>Apoiar</p>
        </div>

        <div class="change-item">
          <img :src="require(`~/static/images/doar.png`)" alt="doar">
          <p>Doar</p>
        </div>

        <div class="change-item">
          <img :src="require(`~/static/images/convidar.png`)" alt="convidar">
          <p>Convidar</p>
        </div>
      </div>
    </section>

    <section class="ecoletiva" :style="{ backgroundImage: 'url(' + require('~/static/images/bg.png') + ')' }">
      <h1>Campanha <em>Eco.</em>letiva</h1>
      <p>Nossa pré-campanha é Eco.letiva: sustentável, participativa, inclusiva e transparente. Seguimos a tendência do mundo moderno e das novas tecnologias, não usaremos papel imprenso e nem dinheiro público, recusamos os recursos do fundo eleitoral. Nossa campanha moderna e coletiva, custará 20 mil reais. O Financiamento colaborativo faz parte da essência da construção do nosso projeto político coletivo e somente dessa forma levantaremos recursos para custear nossa campanha.</p>
    </section>

    <section class="social">
      <h1>Nossas redes sociais</h1>
      <div class="social-links">
        <a href="#" class="social-link"><font-awesome-icon class="social-link__icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
        <a href="#" class="social-link"><font-awesome-icon class="social-link__icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/></a>
        <a href="#" class="social-link"><font-awesome-icon class="social-link__icon" :icon="{ prefix: 'fab', iconName: 'instagram' }"/></a>
        <a href="#" class="social-link"><font-awesome-icon class="social-link__icon" :icon="{ prefix: 'fab', iconName: 'youtube' }"/></a>
      </div>
    </section>

    <section class="video">

    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-content: center;
  text-align: center;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 70px;
  background-color: #60893b;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 15%;
}

.social-media {
  display: flex;
}

.header-social-media__icon {
  font-size: 1.25rem;
  color: #FFF;
  margin: 0 10px;
}

.hero {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 75px 30vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.who-we-are, .what-we-want, .ecoletiva, .social {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 15vh;
}

.who-we-are h1, .what-we-want h1, .ecoletiva h1 {
  font-size: 2.5rem;
  color: #60893b;
  text-transform: uppercase;

  padding-bottom: 30px;
}

.who-we-are p, .what-we-want p, .ecoletiva p {
  max-width: 760px;
  color: #0767aa;
}

.who-we-are h2 {
  font-size: 2rem;
  color: #0767aa;
  text-transform: uppercase;

  max-width: 680px;
  padding-top: 60px;
}

.deziguais-img {
  width: 100%;
}

.what-we-want p {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.what-we-want p::after {
  content: '';
  display: block;
  width: 80%;
  height: 3px;
  background-color: #60893b;

  margin-top: 30px;
}

.join-the-change {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 15vh;
  background-color: #0767aa;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.join-the-change h1 {
  font-size: 3.5rem;
  color: #FFF;
  text-transform: uppercase;

  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join-the-change h1::after {
  content: '';
  display: block;
  width: 80%;
  height: 3px;
  background-color: #FFF;

  margin-top: 15px;
}

.change-items {
  display: flex;
  width: 680px;
  justify-content: space-between;
}

.change-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.change-item p {
  font-size: 1.25rem;
  color: #FFF;
  font-weight: 300;
  text-transform: uppercase;

  padding-top: 30px;
}

.ecoletiva h1 em {
  font-weight: 300;
}

.social {
  background-color: #60893b;
}

.social h1 {
  color: #FFF;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding-bottom: 60px;
}

.social .social-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
}

.social .social-link__icon {
  color: #FFF;
  font-size: 3rem;
}

@media screen and (max-width: 760px) {
  .hero {
    padding: 75px 5vh;
  }

  .logo {
    max-width: 60%;
  }

  .who-we-are, .what-we-want, .ecoletiva, .social, .join-the-change {
    padding: 60px 3vh;
  }

  .who-we-are h2 {
    font-size: 1.5rem;
  }

  .join-the-change h1 {
    font-size: 2rem;
  }

  .change-items {
    flex-direction: column;
  }

  .change-item {
    margin: 15px 0;
  }

  .social .social-links {
    padding: 0 10%;
  }
}

</style>
