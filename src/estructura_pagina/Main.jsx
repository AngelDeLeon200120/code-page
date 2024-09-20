import React from "react";
import "./estilos/Main.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <main>
      <section>
        <motion.div
          className="scrolling"
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          
        >
          <div className="scrolling-contenedor">
            <div className="scrolling-contenedor_texto">
              <div className="scrolling-contenedor_texto-titulo">
                <h1>Who</h1>
                <span>are we</span>
              </div>
              <p>
                Somos un equipo que se destaca por desafiar las normas de la
                industria tecnológica y digital. Nuestra constante búsqueda de
                lo diferente, lo innovador y lo exclusivo nos ha permitido
                colaborar con grandes marcas no solo de Guatemala, sino de todo
                el continente. Esta trayectoria nos ha llevado a construir un
                portafolio con marcas reconocidas a nivel mundial.
              </p>
            </div>
            <div className="scrolling-contenedor_img">
              <div className="profile-card">
                
                  <img
                    src="https://code.com.gt/wp-content/uploads/2024/04/LION-2-codeai_side_view_of_a_a_3d_model_of_a_cyborg_male_lion_face_lay_0ac2dfa6-35dd-48b1-b442-f4185be119d0-scaled.jpg" // Reemplaza con la URL de la imagen
                    alt="Profile"
                  />
               
              </div>
            </div>
            <div className="scrolling-contenedor_boton">
              <button className="boton">Solicitar Cotizacion</button>
            </div>
          </div>
        </motion.div>
      </section>
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio commodi ad laudantium quisquam maiores, magni et eum beatae, ipsam recusandae, nam quos? Aut deserunt iusto impedit obcaecati. Sequi, in atque.
     Iste nemo nesciunt quisquam sapiente, a qui quos tempora? Maxime suscipit quos quo quis officiis accusamus exercitationem ullam. Possimus quidem delectus corporis expedita veniam temporibus rem. Autem pariatur praesentium doloremque!
     Voluptatum tenetur quidem cupiditate laudantium sit earum dignissimos id libero, sequi saepe sed ipsa ea esse praesentium est vero? Voluptatibus quae labore suscipit quam ratione quia, quas ea velit dolorem?
     Error qui id perferendis porro recusandae aut unde magnam, corporis voluptatem blanditiis soluta rem temporibus iure, distinctio enim animi reiciendis adipisci voluptate officiis sapiente voluptas fuga voluptatibus. Beatae, nam delectus?
     Facere quaerat aspernatur error qui deserunt quos, minima totam, adipisci, harum ullam ratione? Sapiente dolorem consequatur vero soluta nostrum quidem velit. Facere aut quia quibusdam sapiente voluptatibus exercitationem, molestiae laudantium!
     Dolorem accusantium magnam eos soluta modi labore consequuntur nostrum impedit cupiditate quam iure, fugiat beatae aliquid numquam, nisi eum consequatur commodi natus praesentium dignissimos alias a? Ea nulla illum atque.
     Ullam rem corporis eveniet officiis labore ratione sapiente eius dicta nisi voluptates error omnis, a consequatur repellendus similique quis architecto? Molestias, omnis velit? Debitis qui nisi praesentium voluptatum possimus dolores?
     Fugiat deserunt recusandae optio praesentium nesciunt est aliquam tenetur facilis a, quasi dignissimos magnam eligendi enim voluptates dolores explicabo veniam aperiam eum reiciendis possimus. Quis expedita hic sequi suscipit maxime!
     Praesentium beatae, accusamus ipsum suscipit distinctio assumenda quas debitis consequuntur ducimus harum, consequatur, fuga corporis! Et voluptatum porro aperiam doloremque. Quisquam, obcaecati. Deleniti velit natus repudiandae similique tempora dolore unde!
     Suscipit aut necessitatibus nisi autem minima quasi sequi nobis dolorum quisquam repellendus ad, a eveniet laudantium voluptate cupiditate eum. Dicta iure eos nostrum culpa ipsa blanditiis reiciendis minus! Dolor, ullam?
     Debitis iusto velit a officia natus esse rem omnis architecto qui voluptas incidunt deserunt laudantium beatae facere voluptatibus et, nihil ad illo quibusdam facilis error. Voluptas voluptate soluta dolores rem?
     Quod mollitia alias ipsum, debitis quisquam animi dignissimos nulla voluptatum? Maiores necessitatibus omnis, doloribus ad quia sequi porro repudiandae soluta culpa quos in sunt, fugit incidunt rem esse ipsum aliquam?
     Quidem unde ipsam beatae fugit eius quis pariatur obcaecati quam accusantium sunt sapiente mollitia praesentium expedita esse nulla suscipit officiis consequatur, corporis nam eveniet cupiditate voluptatum ea deleniti nihil? Magnam?
     Commodi necessitatibus, dicta corrupti culpa quos obcaecati accusantium vel quo minima aspernatur nulla repellat tempore nesciunt. Possimus molestiae corrupti distinctio corporis incidunt iure quisquam porro ducimus ullam officia, eos tempore.
     Dolor reiciendis est dolorum blanditiis corporis ullam laborum nihil, iusto molestiae magni similique natus nemo optio expedita, autem veritatis doloremque obcaecati eveniet accusantium architecto quis cum totam sit at. Voluptate?
     Placeat fuga, temporibus repellat enim error amet ratione dolorum eaque natus sapiente aspernatur odit deleniti repellendus. Maxime et cupiditate voluptates impedit illum, asperiores inventore distinctio quibusdam vel totam cum corporis.
     Commodi voluptatum repellendus tenetur voluptate saepe quam, iure sint, ea provident modi quibusdam odio ut sunt dolore unde aspernatur totam rem autem? Hic dolorem rerum vero ea recusandae reprehenderit in.
     Eum veritatis aliquid aperiam dolor dolorum non aut harum distinctio? Nostrum, eligendi sed. Quibusdam mollitia et quisquam obcaecati necessitatibus ab iste, quam placeat quia provident suscipit praesentium deleniti perspiciatis veniam.
     Vero quas magnam ullam modi officia aspernatur quis sed quod possimus sequi veniam dolore nam at quaerat recusandae voluptatum, voluptas soluta dolorum. Repudiandae, hic cumque quam fugit commodi exercitationem perferendis.
     Deserunt quaerat consectetur, unde aliquid vel ipsa libero voluptas autem facere facilis perferendis, consequatur voluptates molestias optio tempore. At eaque iste vitae pariatur libero temporibus eum magni voluptas qui voluptatum?
     Reiciendis consectetur perferendis nam in dolorum quis impedit id illum quas blanditiis ad voluptatum aliquam delectus, excepturi atque cum ut? Aperiam quia dolorem similique ducimus quasi distinctio atque saepe blanditiis?
     Magnam optio, eos expedita esse quas distinctio officia tempore! Officiis ipsam fugiat animi cum? Quis maxime explicabo, repudiandae, unde a, deleniti voluptate sed adipisci doloremque aliquid animi? Hic, exercitationem voluptas!
     Laboriosam tenetur delectus blanditiis esse porro velit, quos quas ad, ipsam deleniti ex quasi fugiat magni nemo molestiae doloremque consectetur quibusdam dicta earum! Voluptatibus voluptas eveniet consequuntur aliquid, perspiciatis natus.
     Quae repellat, nihil deleniti ea accusantium quis sunt adipisci dolorum, illum enim magni hic incidunt. Possimus eum commodi reiciendis nesciunt! Assumenda molestiae natus magni nesciunt tenetur sapiente amet numquam neque!
     Odio dolorum aut atque ut unde iste nam, error est accusantium. Quia ipsum, quo reiciendis tempore non error voluptatem quisquam, inventore quam, eos consequatur sint earum officia explicabo numquam repellat.
     Expedita, eum. Fugit minus earum incidunt accusamus rerum in quis consectetur placeat labore excepturi, unde laboriosam velit perferendis cum explicabo nulla a, eligendi, illum repudiandae? Itaque ex quae et officiis.
     Tenetur, deserunt quibusdam repellendus inventore minus accusamus officia velit quis? Molestiae nemo animi maiores placeat illum veniam praesentium? Consequatur corporis necessitatibus sapiente aspernatur ipsum, aperiam itaque eaque tempora ea exercitationem!
     Voluptatibus voluptates non saepe dolorum, porro voluptate possimus dignissimos amet ex officia dolorem repellendus iusto debitis consectetur incidunt exercitationem eos eveniet. Voluptatem, dolores maiores? Iure animi ex consectetur nemo enim.
     Esse molestiae recusandae natus velit saepe optio distinctio, deserunt laudantium possimus dolorum veniam a unde accusantium veritatis, repellendus illo ipsa impedit! Adipisci ducimus velit repellendus corporis cum ab similique unde.
     Harum possimus nihil quia inventore, quas est dolorem doloremque magnam molestiae quibusdam porro enim laudantium repellendus amet ad. Optio officiis id ab perspiciatis nam nemo praesentium ratione vero exercitationem quod.
     Maxime quas iure molestias numquam, rem, facilis illum iste enim amet odio sint in ipsum, consectetur exercitationem nesciunt. Minus, suscipit distinctio. Praesentium dignissimos voluptatibus, magnam obcaecati animi nihil debitis possimus.
     Totam aliquam excepturi tenetur asperiores magni ipsa doloribus rerum officiis error deleniti animi, id, est velit illo explicabo accusantium voluptate minus dicta aspernatur, perferendis consequuntur. Eos cumque esse fugiat laborum.
     Ipsa amet nostrum earum commodi? Officia architecto nam laborum exercitationem aliquam voluptates, harum, impedit reprehenderit nisi laboriosam dolor quis nesciunt quo saepe maxime, aspernatur assumenda error asperiores tempora neque quasi?
     Sint mollitia non officiis maxime autem tempore atque qui tenetur aperiam. Expedita laboriosam rerum suscipit quas quae fuga, hic quam voluptatum doloremque facere similique qui placeat aliquid, et, minus eos.
     Expedita hic quae esse debitis explicabo maiores sit perspiciatis voluptate, neque, vero dignissimos pariatur beatae totam ad porro doloremque nihil, corrupti eveniet harum fuga doloribus tempora illum! Similique, ipsam assumenda?
     Natus eos excepturi hic sit minus laudantium quos, sunt praesentium ex aliquid nemo iusto dignissimos perferendis nobis quasi saepe error quaerat eum ut consequuntur illo corporis non? Quibusdam, itaque facilis!
     Placeat enim ex consequatur corporis. Illo, quo ipsa minus dignissimos velit porro dolorem doloremque molestiae facere accusantium, modi rerum nesciunt harum neque fugiat distinctio iusto voluptate quaerat, quam quasi quis?
     Aut deserunt, animi earum delectus dolorem possimus nostrum quisquam atque repellendus neque pariatur nisi perferendis eveniet mollitia fuga dignissimos. Quibusdam perspiciatis facere pariatur fugiat ex in aspernatur, aliquam possimus illo.
     Provident commodi non dolorem cum et fugiat explicabo consequuntur in quod, ex eum. Corrupti natus quisquam voluptas non harum, accusantium odio pariatur cumque animi, sit nesciunt temporibus fugiat. Totam, quaerat.
     Numquam incidunt quo saepe autem inventore voluptatum odit, quidem exercitationem recusandae deserunt! Suscipit, vel. Vitae ea, nisi est magni consectetur eius aliquam quam, totam placeat nostrum fuga alias at consequuntur.
     Porro eligendi, assumenda id unde vero laboriosam officia facilis ea. Quam aliquam, dolores pariatur dicta debitis numquam, sit facilis asperiores amet assumenda fuga omnis placeat! Tempora totam magni neque vel.
     Voluptatem cumque odit accusantium aperiam. Voluptates provident distinctio dolorum perspiciatis reiciendis sequi dicta impedit magni cum. Recusandae blanditiis autem impedit aut quod porro, architecto unde, sequi cumque maxime odio eaque?
     Vel nobis ab odit iste natus voluptas velit provident aliquam impedit totam, sunt cum nostrum ullam eum earum tempore deleniti, enim quae aliquid debitis pariatur. Repellendus, deleniti perferendis! Necessitatibus, quia.
     Consectetur est rerum distinctio harum, ad alias et ipsum fugit quis praesentium neque doloremque enim atque, aut culpa temporibus aperiam labore facilis dolorum! Temporibus aut hic aliquid ex, ducimus laudantium!
     Nemo saepe fugit ipsam perspiciatis facilis quod optio iure odit? Fugit non dolores itaque, sit quaerat inventore quia enim vel totam vero quod fuga ipsam! Repellat aspernatur autem sint architecto.
     Culpa pariatur numquam neque voluptatem repellat, eius exercitationem vero, eum qui rerum praesentium ipsa tempore dolorem modi assumenda hic quae iure nobis. Quia perspiciatis aliquam, quidem vel fugiat inventore eum?
     Nulla dolor tempore minima at quia, fugit cum praesentium, cupiditate cumque reprehenderit pariatur distinctio dignissimos quasi temporibus fugiat quis atque sint dolore quod beatae eum? Neque eligendi beatae consequuntur recusandae.
     Recusandae voluptates maxime minus iste tempore voluptatibus, nihil asperiores autem illo, laudantium quia pariatur. Eos vero porro numquam, delectus quo sint nisi omnis blanditiis deleniti quos, provident quae dignissimos similique!
     Totam ab officiis amet tenetur nobis quibusdam deserunt exercitationem itaque velit, commodi, quo quos assumenda suscipit, odio minima accusamus. Quasi, quo incidunt delectus voluptate nihil quis nostrum voluptatum neque obcaecati.
     Dolore nihil aliquam ex, officiis cum doloremque eaque. Accusantium veniam ab error aspernatur pariatur, exercitationem optio, quibusdam harum quaerat reiciendis vitae enim illum! Eveniet magnam eos quos officiis ut itaque?
    </main>
  );
};

export default Main;
