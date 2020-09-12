<template>
  <div class="container">
    <header class="header">
      <div class="social-media">
        <a href="https://www.facebook.com/DezIguais/" target="_blank" class="icon"><img :src="require(`~/static/images/facebook.png`)" alt="Facebook"></a>
        <a href="https://instagram.com/deziguais?igshid=19bhxnpz3a7hl" target="_blank" class="icon"><img :src="require(`~/static/images/instagram.png`)" alt="Instagram"></a>
        <a href="https://twitter.com/deziguais?s=11" target="_blank" class="icon"><img :src="require(`~/static/images/twitter.png`)" alt="twitter"></a>
        <a href="https://m.youtube.com/channel/UCGnrqjHYBCdE--UEupVSY-A/featured" target="_blank" class="icon"><img :src="require(`~/static/images/youtube.png`)" alt="youtube"></a>
        <a href="https://whats.link/deziguaisnatal" target="_blank" class="icon"><img :src="require(`~/static/images/whatsapp.png`)" alt="youtube"></a>
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
      <h1>Participe da campanha</h1>
      <h2>Se a cidade é de todos, a política também tem que ser</h2>
      <div class="change-items">
        <div class="change-item">
          <a href="https://ondaeleitoral.org/cadastrar/deziguais2020" target="_blank">
            <img :src="require(`~/static/images/apoiar.png`)" alt="Apoiar">
            <p>Apoiar</p>
          </a>
        </div>

        <div class="change-item">
          <a href="http://apoia.org/coletivodeziguais" target="_blank">
            <img :src="require(`~/static/images/vakinha.png`)" alt="doar">
            <p>Doar</p>
          </a>
        </div>

        <div class="change-item">
          <a href="https://apptuts.bio/coletivodeziguais" target="_blank">
            <img :src="require(`~/static/images/convidar.png`)" alt="convidar">
            <p>Convidar</p>
          </a>
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
        <a href="https://www.facebook.com/DezIguais/" target="_blank" class="icon"><img :src="require(`~/static/images/facebook.png`)" alt="Facebook"></a>
        <a href="https://instagram.com/deziguais?igshid=19bhxnpz3a7hl" target="_blank" class="icon"><img :src="require(`~/static/images/instagram.png`)" alt="Instagram"></a>
        <a href="https://twitter.com/deziguais?s=11" target="_blank" class="icon"><img :src="require(`~/static/images/twitter.png`)" alt="Twitter"></a>
        <a href="https://m.youtube.com/channel/UCGnrqjHYBCdE--UEupVSY-A/featured" target="_blank" class="icon"><img :src="require(`~/static/images/youtube.png`)" alt="Youtube"></a>
        <a href="https://whats.link/deziguaisnatal" target="_blank" class="icon"><img :src="require(`~/static/images/whatsapp.png`)" alt="Whatsapp"></a>
      </div>
    </section>

    <section class="video" :style="{ backgroundImage: 'url(' + require('~/static/images/bg.png') + ')' }">
      <div class="video-wrapper">
        <iframe src="https://www.youtube.com/embed/YXI4rlJhqek" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>

    <section class="deziguais" :style="{ backgroundImage: 'url(' + require('~/static/images/bg.png') + ')' }">
      <h1>Conheça os deziguais</h1>
      <div class="profile-items">

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/gustavo.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>Gustavo Brendo</h2>
            <h3>@gustavobrendo</h3>
            <p>Filho de Rose, mãe solo. Nascido e criado no bairro Planalto, Zona Oeste de Natal. Um jovem de 26 anos, estudante de jornalismo, defensor de políticas públicas para a juventude. Sempre estudou em escola pública. Foi presidente do Grêmio do CAIC Planalto, membro do Diretório Central dos Estudantes da Universidade Potiguar e integrou o Conselho da Juventude e Igualdade Racial do município de Parnamirim.</p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/luciana.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>LUCIANA BEZERRA</h2>
            <h3>@lucianasbezerra</h3>
            <p>Tem 48 anos, mãe de três filhos, casada, natalense e potiguar. Advogada desse 2002, ativista das causas das mulheres, participa da RAPS: Rede de Ação Política pela Sustentabilidade, do RenovaBR, do Vamos Juntas na Política e da Comissão da Mulher na OAB/RN. Secretária da Mulher do Solidariedade no RN, através desta missão já colocou em prática, ações importantes, como a Corrida Nós Podemos, campanhas como a do Lenço Solidário e Quebrando o Silêncio. Também coordena projetos como o Mulheres do Axé e o Doceiras do RN.</p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/rodrigo.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>RODRIGO SANTOS</h2>
            <h3>@rodrigxsantos</h3>
            <p>Filho de Sr. Roberto e Dona Tânia. Apaixonado por Natal, empreendedor, ex-atleta, graduando em Nutrição/UFRN. Aos 22 anos abriu seu negócio sem capacitação, experiência e apoio. Hoje, depois de tanto tempo leva consigo as vivências do que é empreender aqui em nossa cidade! </p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/sa.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>LUCIANA SÁ</h2>
            <h3>@lucyanasa</h3>
            <p>Natalense, 38 anos, mãe de dois meninos, bacharel em direito. Ao longo da sua vida, exerceu cargos/funções que lhe fizeram despertar o interesse por temas relevantes ao nosso cotidiano, como a mobilidade urbana. Acredita que as mudanças que procuramos, precisam iniciar a partir de nós mesmos.</p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/evenny.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>EVENNY JOSEPPY</h2>
            <h3>@evennyjoseppy</h3>
            <p>Filho de Seu Edmilson e Dona Clara, nasceu, cresceu e até hoje vive no Bairro do Alecrim. Sempre acreditou que a educação é o caminho mais seguro para todo aquele que deseja realizar seus sonhos. É intérprete de LIBRAS da pastoral do Surdo de Natal, tendo passado, também, pela rede pública de educação como intérprete. Acredita, sobretudo, na inclusão social, em todos os seus aspectos e para todas as pessoas. </p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/ana.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>ANA CAROLINA</h2>
            <h3>@analima_carol</h3>
            <p>Tem 44 anos, mãe de 2 filhos, natalense, nascida e criada na Cidade da Esperança, Administradora, ativista na área da saúde, voluntária em diversas ações sociais direcionadas aos irmãos necessitados. Mulher de fé que quer contribuir pra uma Natal mais humana e solidária. </p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/anderson.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>ANDERSON MONTEIRO</h2>
            <h3>@professoranderson10</h3>
            <p>Filho de Dona Francineide e Seu José Monteiro, neto, com orgulho, de Dona Francisca Maria, sua maior incentivadora. Anderson Monteiro é professor e idealizador de projetos. Brinquedista e ator amador. Carioca de nascimento e Potiguar de coração, morador da Zona Norte do Natal. Acredita na força da cultura e no poder da educação, pois é exemplo vivo do poder de sua transformação.</p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/tiago.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>TIAGO MOURA</h2>
            <h3>@tiagomoura_10</h3>
            <p>Jovem de 25 anos. Autônomo, morador do bairro de Cidade da Esperança há 12 anos. Atua a favor do desenvolvimento social do seu bairro. Defende uma política que tenha como base um maior investimento do município na educação. </p>
          </div>
        </div>

        <div class="profile-item">
          <img :src="require(`~/static/images/edit/jose.png`)" alt="Gustavo Brendo">
          <div class="profile-item__text">
            <h2>JOSÉ ALBINO NETO</h2>
            <h3>@jalbinoneto</h3>
            <p>Tem 56 anos, eletrotécnico, morador do Planalto, Zona Oeste de Natal, onde desde 2002 atua a favor do desenvolvimento social do bairro. Um cidadão ativista que contribui voluntariamente na fiscalização dos serviços públicos em benefício da sociedade. Inscrito e selecionado através do edital Seja DezIguais.</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
}
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

.social-media .icon img {
  max-width: 1.25rem;
  color: #FFF;
  margin: 0 10px;
  filter: invert(100)
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

.who-we-are, .what-we-want, .ecoletiva, .social, .deziguais {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 15vh;
}

.who-we-are h1, .what-we-want h1, .ecoletiva h1, .deziguais h1 {
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

.join-the-change a {
  text-decoration: none;
}

.join-the-change h1 {
  font-size: 3.5rem;
  color: #FFF;
  text-transform: uppercase;

  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.join-the-change h2 {
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 50px;
}

.join-the-change h1::after {
  content: '';
  display: block;
  width: 80%;
  height: 3px;
  background-color: #FFF;

  margin-top: 15px;
}

.join-the-change img {
  height: 100px;
  filter: brightness(100);
}

.change-items {
  display: flex;
  max-width: 680px;
  width: 100%;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
}

.social-links .icon img {
  max-width: 50px;
  filter: invert(100)
}

.social .social-link__icon {
  color: #FFF;
  font-size: 3rem;
}

.video {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 15vw;
}

.video-wrapper {
  position: relative;
  max-width: 740px;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}

.video iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}

.deziguais h1 {
  font-size: 3rem;
}

.profile-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-item {
  margin-top: 60px;
  display: flex;
}

.profile-item img {
  width: 250px;
  height: 300px;
  display: block;
  margin-right: 5vw;
}

.profile-item__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 30px;
  text-align: left;
}

.profile-item__text h2 {
  font-size: 2rem;
  color: #0767aa;
  text-transform: uppercase;
}

.profile-item__text h3 {
  font-size: 1.5rem;
  color: #0767aa;
  font-weight: 300;

  padding-bottom: 40px;
}

.profile-item__text p {
  font-size: 1rem;
  color: #0767aa;

  text-align: left;
}

@media screen and (max-width: 760px) {
  .hero {
    padding: 75px 5vh;
  }

  .logo {
    max-width: 60%;
  }

  .who-we-are, .what-we-want, .ecoletiva, .social, .join-the-change, .deziguais {
    padding: 60px 3vh;
  }

  .who-we-are h2 {
    font-size: 1.5rem;
  }

  .join-the-change h1 {
    font-size: 2rem;
  }

  .social .social-links {
    padding: 0 10%;
  }
  .change-items {
    width: 80%;
  }

  .profile-item {
    max-width: 90%;
  }

  .profile-item {
    flex-direction: column;
    align-items: center;
  }

  .profile-item__text {
    margin: 0;
    margin-top: 30px;
  }

  .profile-item h2 {
    font-size: 1.5rem;
  }

  .profile-item img {
    margin: 0;
  }
}


@media screen and (max-width: 500px) {

  .header {
    justify-content: center;
  }

  .change-items {
    flex-direction: column;
  }

  .change-item {
    margin: 15px 0;
  }

  .social .social-links {
    justify-content: center;
  }

  .social-links a {
    margin: 15px;
  }
}

</style>
