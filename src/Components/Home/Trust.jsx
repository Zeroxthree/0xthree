import React from "react";
import group10158 from "../../assets/trust/Group10158.png";
import group10166 from "../../assets/trust/Group10166.png";
import Rectangle from "../../assets/trust/Rectangle1230.png";

const Trust = () => {
  return (
    <div className="trust">
      <div className="trust__top">
        <div className="trust__top-left">
          <h3>The most trusted and updated content</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            non, corporis officia quis ex aut dicta quia reprehenderit suscipit,
            sint aperiam? Sapiente facilis ullam autem! Blanditiis commodi quos
            labore doloremque, ea praesentium consectetur autem temporibus
            facilis laboriosam odit sunt ullam quasi voluptates numquam laborum
            veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus porro aut rem magnam asperiores ratione, consectetur quas
            dolorum assumenda ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit labore placeat id dolor dicta
            deleniti alias quos aliquid quo quae aspernatur, vero, ducimus, nam
            at libero recusandae quia optio voluptatibus! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Corporis maxime, minima quisquam
            ipsa, deserunt sequi quae explicabo praesentium esse molestias
            magnam ipsum. Reprehenderit modi, fuga veniam natus, ea deleniti
            illo, dignissimos atque aliquid quos minima totam cupiditate
            deserunt laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            aliquam saepe eveniet fuga repellendus unde quibusdam nostrum
            sapiente est praesentium? Corrupti fugiat itaque est veritatis?Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Corporis, culpa
            illum id ducimus ipsum distinctio cumque modi ipsa ullam laudantium
            cum repudiandae amet adipisci quas iste aut hic unde, illo laborum
            eius totam iure consectetur soluta. Ipsum, a odio.''
          </p>
        </div>
        <div className="trust__top-right">
          <img src={group10166} />
        </div>
      </div>
      <div className="trust__bottom">
        <img src={group10158} alt="trust-img" className="trust__bottom-left" />
        <img
          src={Rectangle}
          alt="trust__bottom-right"
          className="trust__bottom-right"
        />
      </div>
    </div>
  );
};

export default Trust;
