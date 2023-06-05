import React, { Component } from "react";
import Title from "./Title";
import room1 from "../images/user-1.jpg";
import room2 from "../images/user-2.jpg";
import room3 from "../images/user-3.jpg";
export default class testimoni extends Component {
  state = {
    services: [
      {
        images: room1 ,
        alt: "profile1",
        title: "Naufal Fa'iq Ramadhani",
        info:
          "Saya sangat senang dengan pengalaman menggunakan website adopsi ini. Sistemnya mudah digunakan, dan saya dengan cepat menemukan hewan peliharaan yang sempurna untuk keluarga kami. Proses adopsi berjalan lancar, dan kami sekarang memiliki anjing yang lucu dan penuh kasih. Terima kasih banyak!"
      },
      {
        images: room2,
        alt: "profile2",
        title: "Annisa Nur Rahmadhani",
        info:
          "Website adopsi ini luar biasa! Desainnya yang ramah pengguna membuatnya mudah untuk menjelajahi berbagai hewan peliharaan yang mencari rumah baru. Saya terkesan dengan ketersediaan informasi yang lengkap dan detail tentang setiap hewan. Saya berhasil menemukan kucing yang manis dan sehat untuk menjadi teman setia saya. Terima kasih kepada tim di balik website ini!"
      },
      {
        images: room3 ,
        alt: "profile3",
        title: "Muhammad Rangga Rafif",
        info:
          "Saya baru-baru ini menggunakan website adopsi ini untuk mencari sahabat baru untuk anjing saya. Prosesnya sangat nyaman dan transparan. Saya suka bahwa saya dapat melihat profil dan foto-foto hewan peliharaan yang tersedia sebelum memutuskan untuk mengadopsi. Tim di balik website ini juga memberikan dukungan yang hebat selama proses adopsi. Sekarang, anjing saya memiliki teman bermain yang baru dan kami sangat bahagia!"
      }
    ]
  };
  render() {
    return (
      <section className="testimoni">
        <Title title="Happy Owners" />
        <div className="testimoni-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="testimoni">
                <img src={item.images} alt="{item.alt}"></img>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
