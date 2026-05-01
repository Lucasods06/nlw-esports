import Header from './Components/Header';
import Section from './Components/Section';
import ListItem from './Components/ListItem';

import './App.css';

const gamesList = [
  {
    href: "https://www.twitch.tv/directory/category/marvels-spider-man-2",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/1967084783_IGDB-144x192.jpg",
    imgAlt: "Imagem do jogo Marvel's Spider-Man 2"
  },
  {
    href: "https://www.twitch.tv/directory/category/ea-sports-fc-26",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/624536948_IGDB-144x192.jpg",
    imgAlt: "Imagem do jogo EA Sports FC 26"
  },
  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    imgAlt: "Imagem do jogo Minecraft"
  },
  {
    href: "https://www.twitch.tv/directory/category/grand-theft-auto-v",
    imgSrc: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    imgAlt: "Imagem do jogo GTA-V"
  }
];
const streamsList = [
  {
    href: "https://www.twitch.tv/loud_coringa",
    imgSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/3f038015-59f4-44f3-8a82-7437d3afd068-profile_image-70x70.png",
    imgAlt: "Imagem do Twitch loud_coringa"
  },
  {
    href: "https://www.twitch.tv/casimito",
    imgSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png",
    imgAlt: "Imagem do Twitch casimito"
  },
  {
    href: "https://www.twitch.tv/gaules",
    imgSrc: "https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-70x70.png",
    imgAlt: "Imagem do Twitch gaules"
  },
];
const socialList = [
  {
    href: "https://www.instagram.com/lucas.odss/",
    imgSrc: "/assets/instagram.svg",
    imgAlt: "Imagem do Instagram"
  },
  {
    href: "https://www.linkedin.com/in/lucasoliveira2006/",
    imgSrc: "/assets/linkedin.svg",
    imgAlt: "Imagem do LinkedIn"
  },
  {
    href: "https://www.linkedin.com/in/lucasoliveira2006/",
    imgSrc: "/assets/github.svg",
    imgAlt: "Imagem do LinkedIn"
  }
];
function App() {
  return (
    <div>
      <Header />

      <main>
        <Section
          tittle="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesList.map((item) => (
            <ListItem
              key={item.href}
              href={item.href}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </Section>

        <Section
          tittle="Meus streams favoritos"
          subtitle="Live streams que eu mais assisto!"
          className="channel-list"
        >

          {streamsList.map((item) => (
            <ListItem
              key={item.href}
              href={item.href}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          ))}
        </Section>
        <Section
          tittle="Minhas redes"
          subtitle="Se conecte comigo nas redes sociais!"
          className="social-list"
        >
          {socialList.map((item) => {
            return (
              <ListItem
                key={item.href}
                href={item.href}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
            />
          )
        })}
      </Section>
    </main>


    </div >

  )
}

export default App
